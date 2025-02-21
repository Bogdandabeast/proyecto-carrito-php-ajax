let carrito = [];
let zapatillasLista = [];

function cargarCarrito() {
  if (localStorage.getItem("carrito") === null) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito);
  }else{
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }

  document.getElementById("cantidadCarrito").innerHTML = carrito.length;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("cantidadCarrito").innerHTML = carrito.length;
}

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
      zapatillas.innerHTML = "";
      if (datos.length > 0) {
        for (zapatilla of datos) {

          zapatillasLista.push(zapatilla);
          zapatillas.innerHTML += `
                <article class="zapatilla" >
                    <img src="public/img/zapatillas/${zapatilla["imagen"]}" alt="Zapatillas Airforce color blanco">
                    <div class="detalles-producto">
                        <h2 class="titulo-producto">${zapatilla["modelo"]}</h2>
                        <p class="descripcion-producto">${zapatilla["descripcion"]}</p>
                        <p class="precio-producto">${zapatilla["precio"]}</p>
                        <a data-articuloid="${zapatilla["id"]}" class="boton-compra" aria-label="Añadir Airforce al carrito">Añadir al Carrito</a>
                    </div>
                </article>`;
        }
      } else {
        zapatillas.innerHTML =
          "No  existen  zapatillas  con  el  texto introducido como modelo";
      }

      let botones = document.querySelectorAll(".boton-compra");

      for (boton of botones) {
        let idarticulo = boton.dataset.articuloid;
        boton.addEventListener("click", () => {

          zapatillasLista.forEach(element => {
              if(element.id == idarticulo){
                carrito.push(element);
                guardarCarrito();
              }
          });

        });
      }
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const zapatillas = document.getElementById("zapatillas");

  buscarZapatilla("");

  const bucarZapailla = document.getElementById("buscar-zapatilla");

  bucarZapailla.addEventListener("input", () => {
    buscarZapatilla(bucarZapailla.value);
  });

  cargarCarrito();
});


