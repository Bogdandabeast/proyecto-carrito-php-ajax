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

let carrito = [];
let zapatillasLista = [];

function cargarCarrito() {
  if (localStorage.getItem("carrito") === null) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    const carritoData = JSON.parse(localStorage.getItem("carrito"));
    carrito = [];
    carritoData.forEach((item) => {
      carrito.push(new Producto(item.id, item.modelo, item.descripcion, item.precio, item.imagen, item.cantidad));
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
  cargarCarrito();
  console.log(carrito);
});

function buscarZapatilla(buscar) {
  zapatillasLista = [];
  const busqueda = {
    articulo: -1,
    busqueda: buscar,
  };

  const opciones = {
    method: "POST",
    body: JSON.stringify(busqueda),
  };

  fetch("./API/buscadorZapatillas.php", opciones)
    .then((resultado) => resultado.json())
    .then((datos) => {
      const zapatillas = document.getElementById("zapatillas");
      zapatillas.innerHTML = "";

      if (datos.length > 0) {
        for (let zapatilla of datos) {
          const producto = new Producto(
            zapatilla.id,
            zapatilla.modelo,
            zapatilla.descripcion,
            zapatilla.precio,
            zapatilla.imagen
          );

          zapatillasLista.push(producto);

          zapatillas.innerHTML += `
            <article class="zapatilla">
                <img src="public/img/zapatillas/${producto.imagen}" alt="Zapatillas ${producto.modelo}">
                <div class="detalles-producto">
                    <h2 class="titulo-producto">${producto.modelo}</h2>
                    <p class="descripcion-producto">${producto.descripcion}</p>
                    <p class="precio-producto">${producto.precio}€</p>
                    <a data-articuloid="${producto.id}" class="boton-compra" aria-label="Añadir ${producto.modelo} al carrito"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z"/></svg></a>
                </div>
            </article>`;
        }
      } else {
        zapatillas.innerHTML =
          "No existen zapatillas con el texto introducido como modelo";
      }

      let botones = document.querySelectorAll(".boton-compra");

      for (let boton of botones) {
        let idarticulo = boton.dataset.articuloid;
        boton.addEventListener("click", () => {
          let productoSeleccionado = zapatillasLista.find(
            (element) => element.id == idarticulo
          );

          if (productoSeleccionado) {
            let productoEnCarrito = carrito.find(
              (item) => item.id == productoSeleccionado.id
            );

            if (productoEnCarrito) {
              productoEnCarrito.cantidad += 1;
            } else {
              carrito.push(new Producto(
                productoSeleccionado.id,
                productoSeleccionado.modelo,
                productoSeleccionado.descripcion,
                productoSeleccionado.precio,
                productoSeleccionado.imagen,
                1
              ));
            }

            guardarCarrito();
          }
        });
      }
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const zapatillas = document.getElementById("zapatillas");

  buscarZapatilla("");

  const buscarZapatillaInput = document.getElementById("buscar-zapatilla");

  buscarZapatillaInput.addEventListener("input", () => {
    buscarZapatilla(buscarZapatillaInput.value);
  });

  cargarCarrito();
});