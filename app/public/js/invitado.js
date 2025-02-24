window.addEventListener("DOMContentLoaded", function() {
    cargarPedidos();
});

function cargarPedidos() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const idPedido = params.get('idPedido');
    var url = `./Controller/invitadoController.php?email=${encodeURIComponent(email)}&idPedido=${encodeURIComponent(idPedido)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.success == true) {
                const mostrar = document.getElementById("panelPedidos");
                mostrar.innerHTML = ""; // Limpiar contenido anterior

                console.log(data);

                data.pedidos.forEach(pedido => {
                    const pedidoSection = document.createElement('section');
                    pedidoSection.className = 'pedido';
                    pedidoSection.innerHTML = `
                        <h3>Pedido #${pedido.idPedido}</h3>
                        <p><strong>Fecha:</strong> ${pedido.fecha}</p>
                        <div class="zapatillas">
                            <h4>Zapatillas:</h4>
                        </div>
                        <span>Total ${pedido.total}</span>
                    `;

                    const zapatillasDiv = pedidoSection.querySelector('.zapatillas');

                    pedido.zapatillas.forEach(zapatilla => {
                        const zapatillaDiv = document.createElement('div');
                        zapatillaDiv.className = 'zapatillaItem';
                        zapatillaDiv.innerHTML = `
                            <img src="public/img/zapatillas/${zapatilla.imagen}" alt="Zapatilla ${zapatilla.imagen}" width="100">
                            <p><strong>Cantidad:</strong> ${zapatilla.cantidad}</p>
                            <p><strong>Modelo:</strong> ${zapatilla.modelo}</p>
                            <p class="precio">${zapatilla.precio}</p>
                        `;
                        zapatillasDiv.appendChild(zapatillaDiv);
                    });

                    mostrar.appendChild(pedidoSection);
                });
            } else {
                alert("Error al recibir datos: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Ocurrió un error en la comunicación con el servidor.");
        });
}





/* let carrito = [];

class Producto {
  constructor(id, modelo, descripcion, precio, imagen, cantidad = 1) {
    this.id = id;
    this.modelo = modelo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }
} */

