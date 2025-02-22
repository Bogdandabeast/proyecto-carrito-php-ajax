
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
  
window.addEventListener("DOMContentLoaded", cargarCarrito);