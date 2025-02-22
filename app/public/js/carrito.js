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

  let cantidadTotal = 0;
  carrito.forEach((item) => {
    cantidadTotal += item.cantidad;
  });
  document.getElementById("cantidadCarrito").innerHTML = cantidadTotal;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));

  let cantidadTotal = 0;
  carrito.forEach((item) => {
    cantidadTotal += item.cantidad;
  });
  document.getElementById("cantidadCarrito").innerHTML = cantidadTotal;
}

window.addEventListener("DOMContentLoaded", () => {
  const panelZapatillas = document.getElementById("zapatillas");

  cargarCarrito();

  for (zapatilla of carrito) {
    panelZapatillas.innerHTML += `
<div class="articulo">
<div class="info">
  <img src="public/img/zapatillas/${zapatilla.imagen}" alt="Imagen de zapatilla">
  <p class="modelo">${zapatilla.modelo}</p>
</div>

<input type="number" value="${zapatilla.cantidad}" class="cantidad-input">
<p class="precio">${zapatilla.precio}</p>

 <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>

</div>

    `;
  }
});
