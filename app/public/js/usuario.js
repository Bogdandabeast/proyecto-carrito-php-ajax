document.addEventListener("DOMContentLoaded",function(){

    cargarPedidos();




});

function cargarPedidos() {
    fetch('./Controller/usuarioController.php')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            const mostrar = document.getElementById("panelPedidos");
            data.message.forEach(item => {
                const pedidoSection = document.createElement('section');
                pedidoSection.className = 'pedidoUsuario';
                pedidoSection.innerHTML = `
                  <h3>Pedido #${item.idPedido}</h3>
                  <p><strong>Modelo:</strong> ${item.modelo}</p>
                  <p><strong>Descripción:</strong> ${item.descripcion}</p>
                  <p><strong>Precio:</strong> ${item.precio}</p>
                  <p><strong>Cantidad:</strong> ${item.cantidad}</p>
                  <p><strong>Precio Total:</strong> ${item.precioTotal}</p>
                  <p><strong>Fecha:</strong> ${item.fecha}</p>
                  <img src="public/img/zapatillas/${item.imagen}" alt="${item.modelo}">
                `;
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




    };



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

