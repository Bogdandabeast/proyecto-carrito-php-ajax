let carrito = [];

class Producto {
  constructor(id, modelo, descripcion, precio, imagen, cantidad = 1) {
    this.id = id;
    this.modelo = modelo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }
}
function cargarCarrito() {
  if (localStorage.getItem("carrito") === null) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    const carritoData = JSON.parse(localStorage.getItem("carrito"));
    carrito = [];
    carritoData.forEach((item) => {
      carrito.push(
        new Producto(
          item.id,
          item.modelo,
          item.descripcion,
          item.precio,
          item.imagen,
          item.cantidad
        )
      );
    });
  }

  mostrarCantidad();
}

function mostrarCantidad() {
  let cantidadTotal = 0;
  carrito.forEach((item) => {
    cantidadTotal = cantidadTotal + parseInt(item.cantidad);
  });

  document.getElementById("cantidadCarrito").innerHTML = cantidadTotal;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCantidad();
}

function calcularTotal() {
  let total = 0;
  for (producto of carrito) {
    total += producto.precio * producto.cantidad;
  }
  total = total.toFixed(2);
  return total;
}

function cargarPanel() {
  const panelZapatillas = document.getElementById("zapatillas");
  panelZapatillas.innerHTML = "";
  cargarCarrito();

  let cantidades = [];
  let eliminaciones = [];
  for (zapatilla of carrito) {
    panelZapatillas.innerHTML += `
<div class="articulo">
<div class="info">
  <img src="public/img/zapatillas/${zapatilla.imagen}" alt="Imagen de zapatilla">
  <p class="modelo">${zapatilla.modelo}</p>
</div>

<input type="number" data-articuloid="${zapatilla.id}" value="${zapatilla.cantidad}" class="cantidad-input">
<p class="precio">${zapatilla.precio}</p>

 <button class="eliminar" data-articuloid="${zapatilla.id}">    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>

</div>

    `;
  }

  cantidades = document.querySelectorAll(".cantidad-input");
  eliminaciones = document.querySelectorAll(".eliminar");

  for (cantidad of cantidades) {
    cantidad.addEventListener("change", (cantidad) => {
      for (let producto in carrito) {
        if (carrito[producto].id == cantidad.target.dataset.articuloid) {
          carrito[producto].cantidad = cantidad.target.value;
          guardarCarrito();
          cargarPanel();
        }
      }
    });
  }

  for (eliminar of eliminaciones) {
    eliminar.addEventListener("click", (elemento) => {
      for (let producto in carrito) {
        if (carrito[producto].id == elemento.target.dataset.articuloid) {
          carrito.splice(producto, 1);
          guardarCarrito();
          cargarPanel();
        }
      }
    });
  }

  document.getElementById("totalCarrito").textContent = calcularTotal() + "€";
}

// Proceso
function procesarCarrito() {
  fetch("./Api/verificarSesion.php")
    .then((resultado) => resultado.json())
    .then((datos) => {
      if (datos.logeado == true) {
        procesarPedidoUsuario();
      } else {
        //usuario no logeado
        document.getElementById("panelCarrito").innerHTML += `
        <div class="popup">
            <div>
            <h1>¿Tienes Cuenta?</h1>
            <p>Inicia sesion y haz el pedido para tenerlo en tu cuenta</p>
            <a href="login.php">Iniciar Sesion</a>
            <button id="continuarInvitado">Continuar como invitado</button>
            </div>
        </div>`;

        let botonInvitado = document.getElementById("continuarInvitado");

        botonInvitado.addEventListener("click", () => {
          procesarPedidoInvitado();
        });
      }
    });
}

function procesarPedidoInvitado() {
  console.log("Procesar Invitado");
  const popup = document.querySelector(".popup");
  popup.remove();

  document.getElementById("panelCarrito").innerHTML += `
<div class="popup">
    <div>
    <h1>Continuar Invitado</h1>
    <p>Introduce tu email para que puedas rastrear tu pedido</p>
    <form id="registroInvitado">
    <label>Email</label>
    <input type="email" value="" required>
    <button>Procesar</button>
    </form>
    </div>
</div>`;

  const formularioInvitado = document.getElementById("registroInvitado");

  formularioInvitado.addEventListener("submit", (elemento) => {
    elemento.preventDefault();
    let emailInvitado = formularioInvitado.children[1].value;

    let datosCarrito = {
      total: document.getElementById("totalCarrito").textContent,
      carrito: carrito,
      email:emailInvitado
    };
    let opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosCarrito),
    };
    fetch("./Api/procesarPedido.php", opciones)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        if (datos.procesado == true) {
          carrito = [];
          guardarCarrito();
          cargarPanel();
          document.getElementById("panelCarrito").innerHTML += `
    <div class="popup">
        <div>
        <h1>Pedido Realizado</h1>
        <div class="alerta correcto">Registrado Correctamente</div>
        <p>${datos.mensaje}</p>
        <a href="login.php">Ver mis Pedidos</a>
        </div>
    </div>`;
        } else {
          if (datos.procesado == false) {
            console.log(datos.mensaje);
          }
        }
      });
  });
}
function procesarPedidoUsuario() {
  if (carrito.length > 0) {
    let datosCarrito = {
      total: document.getElementById("totalCarrito").textContent,
      carrito: carrito,
    };
    let opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosCarrito),
    };
    fetch("./Api/procesarPedido.php", opciones)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        if (datos.procesado == true) {
          carrito = [];
          guardarCarrito();
          cargarPanel();
          document.getElementById("panelCarrito").innerHTML += `
      <div class="popup">
          <div>
          <h1>Pedido Realizado</h1>
          <div class="alerta correcto">Registrado Correctamente</div>
          <p>Inicia y mira tus pedidos y los estados</p>
          <a href="login.php">Ver mis Pedidos</a>
          </div>
      </div>`;
        } else {
          if (datos.procesado == false) {
            console.log(datos.mensaje);
          }
        }
      });
  } else {
    document.getElementById(
      "zapatillas"
    ).innerHTML = `<div class="alerta error">No hay zapatillas para procesar</div>`;
  }
}

window.addEventListener("DOMContentLoaded", cargarPanel);
