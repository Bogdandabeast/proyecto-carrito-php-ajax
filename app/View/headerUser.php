<header>
    <a href="index.php" class="logo" aria-label="Ir a la página de inicio">DAWSHOP</a>

    <nav aria-label="Navegación principal">
        <ul id="links">

            <li><a href="index.php" aria-label="Ver zapatillas">Zapatillas</a></li>
        </ul>


        <a href="carrito.php" id="carrito" aria-label="Ver carrito de compras con 0 productos">
            <img src="public/img/iconoCarrito.png" alt="Ícono del carrito de compras">
            <span aria-live="cantidadCarrito" id="cantidadCarrito"></span>
        </a>

        <div class="usuarioMenu">
            <span><?php echo $_SESSION["nombreUsuario"] ?></span>  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m480-360 160-160H320l160 160Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <div class="contendido">
                <a href="usuario.php">Mis Pedidos</a>
                <a id="cerrarSesion" href="cerrarSession.php">Cerrar Sesion</a>
            </div>
        </div>
    </nav>
</header>