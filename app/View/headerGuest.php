<header>
    <a href="index.php" class="logo" aria-label="Ir a la página de inicio">DAWSHOP</a>

    <nav aria-label="Navegación principal">
        <ul id="links">
            <li><a href="index.php" aria-label="Ver zapatillas">Zapatillas</a></li>
        </ul>

        <ul id="guest" aria-label="Opciones de usuario">
            <li><a href="login.php" aria-label="Iniciar sesión en tu cuenta">Iniciar Sesión</a></li>
            <li><a href="registro.php" aria-label="Crear una nueva cuenta">Registro</a></li>
        </ul>
        <a href="carrito.php" id="carrito" aria-label="Ver carrito de compras con 0 productos">
            <img src="public/img/iconoCarrito.png" alt="Ícono del carrito de compras">
            <span aria-live="cantidadCarrito" id="cantidadCarrito">0</span>
        </a>

        <button id="movilMenu" onclick="abrir()">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
        </button>
    </nav>

    <div class="movilmenu">

    <h2>Menu <button onclick="cerrar()"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></h2>
        <ul>
            <li><a href="index.php" aria-label="Ver zapatillas">Zapatillas</a></li>
        </ul>
        <ul aria-label="Opciones de usuario">
            <li><a href="login.php" aria-label="Iniciar sesión en tu cuenta">Iniciar Sesión</a></li>
            <li><a href="registro.php" aria-label="Crear una nueva cuenta">Registro</a></li>
        </ul>
    </div>


</header>