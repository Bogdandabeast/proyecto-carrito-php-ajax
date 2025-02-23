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


function mostrarCantidad(){
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

  for( cantidad of cantidades){
    cantidad.addEventListener("change",(cantidad) => {

      for(let producto in carrito){
        if(carrito[producto].id == cantidad.target.dataset.articuloid){

          carrito[producto].cantidad = cantidad.target.value;
          guardarCarrito();
          cargarPanel();
        }
      } 
    });
  }

  for(eliminar of eliminaciones){
    eliminar.addEventListener("click",(elemento) => {

      for( let producto in carrito){
        if(carrito[producto].id == elemento.target.dataset.articuloid ){
          carrito.splice(producto,1);;
          guardarCarrito();
          cargarPanel();
        }
      } 
    });
  }


  document.getElementById("totalCarrito").textContent = calcularTotal() + "€";
}


// Proceso
function procesarCarrito(){

  fetch("API/verificarSesion.php")
    .then((resultado) => resultado.json())
    .then((datos) => {
      if(datos.logeado == true){
        procesarPedidoUsuario()
      }else{
        //usuario no logeado
        document.getElementById("panelCarrito").innerHTML += `
        <div class="popup">
            <div>
            <h1>¿Tienes Cuenta?</h1>
            <p>Inicia sesion y haz el pedido para tenerlo en tu cuenta</p>
            <a href="login.php">Iniciar Sesion</a>
            <button>Continuar como invitado</button>
            </div>
        </div>`;
      }
    });

}

function procesarPedidoUsuario(){

  let datosCarrito ={
    "total": document.getElementById("totalCarrito").textContent,
    "carrito":carrito
  }
let opciones = {
  method:"POST",
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify(datosCarrito)
}
fetch("API/procesarPedido.php",opciones)
.then(respuesta => respuesta.json())
.then(datos => {
  console.log(datos);
  if(datos.procesado == true){
    console.log("procesado");
  }else{
    if(datos.procesado == false){
      console.log(datos.mensaje);
    }
  }
});

}


window.addEventListener("DOMContentLoaded", cargarPanel);
