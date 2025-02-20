<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <title>Indice</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
</head>

<body>

    <?php include "Controller/header.php"; ?>


    
    <img id="banner" src="public/img/banner.png" alt="">

    <main id="inicio">
        <h1>Encuentra Tu Zapatilla</h1>

        <section id="opciones">
            <input type="text"placeholder="Buscar modelo zapatilla">
            <select class="ordenar">
                <option value="">Ordenar por</option>
                <option value="nuevo">Más recientes</option>
                <option value="popular">Más populares</option>
                <option value="precioAsc">Precio: Menor a mayor</option>
                <option value="precioDesc">Precio: Mayor a menor</option>
            </select>
        </section>
    </main>

    <section id="zapatillas">

    <div class="zapatilla">
    <img src="public/img/zapatillas/airforce.png" alt="">
    <div class="detalles-producto">
      <h2 class="titulo-producto">Airforce</h2>
      <p class="descripcion-producto">Diseño moderno y deportivo, ideal para tus entrenamientos.</p>
      <p class="precio-producto">120.00€</p>
      <a href="#" class="boton-compra">Añadir al Carrito</a>
    </div>
  </div>

  <div class="zapatilla">
  <img src="public/img/zapatillas/airforce.png" alt="">
    <div class="detalles-producto">
      <h2 class="titulo-producto">Añadir al Carrito</h2>
      <p class="descripcion-producto">Diseño moderno y deportivo, ideal para tus entrenamientos.</p>
      <p class="precio-producto">120.00€</p>
      <a href="#" class="boton-compra">Comprar</a>
    </div>
  </div>

  <div class="zapatilla">
  <img src="public/img/zapatillas/airforce.png" alt="">
    <div class="detalles-producto">
      <h2 class="titulo-producto">Añadir al Carrito</h2>
      <p class="descripcion-producto">Diseño moderno y deportivo, ideal para tus entrenamientos.</p>
      <p class="precio-producto">120.00€</p>
      <a href="#" class="boton-compra">Comprar</a>
    </div>
  </div>

    </section>

</body>

</html>