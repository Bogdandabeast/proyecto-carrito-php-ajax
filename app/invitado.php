<?php
    session_start();
/*     if(!isset($_SESSION["INVITADO"])) {
        header("Location: index.php");
        exit();
    } */

    //invitadoController.php?email=usuario@ejemplo.com&idPedido=123


?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <title>invitado</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="public/js/invitado.js"></script>
    <script src="./public/js/gestorCarrito.js"></script>
</head>

<body>
    <?php include "Controller/header.php";?>
    <img id="banner" src="public/img/banner.png" alt="Banner promocional de DAWSHOP">

    <main id="misPedidos">
        <h1>Mis pedidos</h1>
        <div id="panelPedidos"></div>


    </main>
</body>

</html>