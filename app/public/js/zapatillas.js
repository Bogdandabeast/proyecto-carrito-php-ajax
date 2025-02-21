function buscarZapatilla(buscar) {
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
          zapatillas.innerHTML += `
                <article class="zapatilla" data-articuloid="${zapatilla["id"]}">
                    <img src="public/img/zapatillas/${zapatilla["imagen"]}" alt="Zapatillas Airforce color blanco">
                    <div class="detalles-producto">
                        <h2 class="titulo-producto">${zapatilla["modelo"]}</h2>
                        <p class="descripcion-producto">${zapatilla["descripcion"]}</p>
                        <p class="precio-producto">${zapatilla["precio"]}</p>
                        <a href="#" class="boton-compra" aria-label="Añadir Airforce al carrito">Añadir al Carrito</a>
                    </div>
                </article>`;
        }
      }else{
        zapatillas.innerHTML = "No  existen  zapatillas  con  el  texto introducido como modelo";
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
});
