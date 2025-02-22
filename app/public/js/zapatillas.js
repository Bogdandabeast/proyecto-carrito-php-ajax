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

  fetch("API/buscadorZapatillas.php", opciones)
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
                    <p class="precio-producto">${producto.precio}</p>
                    <a data-articuloid="${producto.id}" class="boton-compra" aria-label="Añadir ${producto.modelo} al carrito">Añadir al Carrito</a>
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