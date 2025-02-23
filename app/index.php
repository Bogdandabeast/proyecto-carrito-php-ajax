<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <title>Índice</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="public/js/zapatillas.js"></script>
</head>

<body>
    
    <?php include "Controller/header.php"; ?>
    <img id="banner" src="public/img/banner.png" alt="Banner promocional de DAWSHOP">

    <main id="inicio">
        <h1>Encuentra Tu Zapatilla</h1>

        <section id="opciones" aria-label="Opciones de búsqueda y filtrado">
            <label for="buscar-zapatilla">Buscar modelo de zapatilla</label>
            <input type="text" id="buscar-zapatilla" placeholder="Buscar modelo de zapatilla" aria-label="Buscar modelo de zapatilla">

            <!-- <label for="ordenar">Ordenar productos</label>
            <select id="ordenar" class="ordenar" aria-label="Ordenar productos">
                <option value="">Ordenar por</option>
                <option value="nuevo">Más recientes</option>
                <option value="popular">Más populares</option>
                <option value="precioAsc">Precio: Menor a mayor</option>
                <option value="precioDesc">Precio: Mayor a menor</option>
            </select> -->
        </section>

        <section id="zapatillas" aria-label="Lista de zapatillas disponibles">

        </section>
    </main>
</body>

</html>
