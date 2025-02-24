<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <link rel="icon" type="image/png" href="./public/img/logo.svg">
    <title>Pagina de Registro</title>
    <!--enlace a las fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!--enlace a las fuentes-->

    <!--Script-->
    <script src="./public/js/registro.js"></script>
    <script src="./public/js/gestorCarrito.js"></script>
    <!--Script-->
</head>
<body>
    <!--header-->
    <?php include "Controller/header.php"; ?>
    <!--header-->

    <!--main-->
    <main>
        <div class="formularioSesion">
        <form action="" method="POST">
            <a href="./index.php"><img src="./public/img/logo.svg" alt="DawShop"></a>
            <h2>Crear una cuenta DAWSHOP</h2>
            <!--campo nombre-->
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre">
            <span id="nombreSpan" class="aviso"></span>

            <!--campo apellidos-->
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos">
            <span id="apellidosSpan" class="aviso"></span>

            <!--campo email-->
            <label for="email">Email</label>
            <input type="text" id="email" name="email" autocomplete="off">
            <span id="emailSpan" class="aviso"></span>

            <!--campo clave-->
            <label for="">Clave</label>
            <input type="password" id="clave" name="clave">
            <span id="claveSpan" class="aviso"></span>

            <!--boton registro-->
            <button>Registrar</button>
            <p>Al seleccionar <b>Registrar</b>, aceptas nuestras <a href="">Condiciones</a> y reconocemos nuestra <a href="">Declaracion de privacidad</a></p>
        </form>
        </div>
    </main>
    <!--footer-->
</body>
</html>
