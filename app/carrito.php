<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <link rel="icon" type="image/png" href="./public/img/logo.svg">
    <title>Índice</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="public/js/carrito.js"></script>
</head>

<body>
    <?php include "Controller/header.php"; ?>



    <main id="panelCarrito">

    <h1>Mi Carrito</h1>

    <section id="zapatillas">
        
    </section>

    <div id="seguir">
    <button onclick="procesarCarrito()">Procesar <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M552-432q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-288 96q-29.7 0-50.85-21.17Q192-378.33 192-408.06v-288.22Q192-726 213.15-747T264-768h576q29.7 0 50.85 21.17Q912-725.67 912-695.94v288.22Q912-378 890.85-357T840-336H264Zm72-72h432q0-30 21.15-51.12 21.15-21.11 50.85-21.11V-624q-29.7 0-50.85-21.15Q768-666.3 768-696H336q0 30-21.15 51.12-21.15 21.11-50.85 21.11V-480q29.7 0 50.85 21.15Q336-437.7 336-408Zm456 216H120q-29.7 0-50.85-21.15Q48-234.3 48-264v-408h72v408h672v72ZM264-408v-288 288Z"/></svg></button> <p> Total: <strong id="totalCarrito"></strong></p>
    </div>


    <p class="asegurado">Pago Asegurado por DAWSTORE</p>
    </main>




</body>

</html>
