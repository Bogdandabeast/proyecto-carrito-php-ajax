<?php
    session_start();
    if(!isset($_SESSION["REGISTRADO"])) {
        header("Location: index.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <title>Usuario</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="public/js/usuario.js"></script>
</head>

<body>
    <?php include "Controller/header.php"; ?>
    <img id="banner" src="public/img/banner.png" alt="Banner promocional de DAWSHOP">

    <main>
        <h1>Tus pedidos</h1>
        <div id="panelPedidos"></div>


    </main>
</body>

</html>
