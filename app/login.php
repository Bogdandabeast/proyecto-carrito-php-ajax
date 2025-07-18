<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/estilo.css">
    <link rel="icon" type="image/png" href="./public/img/logo.svg">
    <title>Pagina de Login</title>
    <!--enlace a las fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!--enlace a las fuentes-->

    <!--Script-->
    <script src="./public/js/login.js"></script>
    <script src="./public/js/gestorCarrito.js"></script>
    <script src="public/js/header.js"></script>
    <!--Script-->
</head>

<body>
    <!--header-->
    <?php include "Controller/header.php"; 
    if(isset($_SESSION["REGISTRADO"])){
        header("location: usuario.php");
    }
    
    ?>
    <!--header-->

    <!--main-->
    <main>
        <div class="formularioSesion">
            <form id="formularioLogin">
                <a href="./index.php"><img src="./public/img/logo.svg" alt="DawShop"></a>

                
                <h2>Iniciar Sesion <span>como Usuario</span></h2>
                <div id="informeUsuario"></div>
                <!--campo email-->
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="tu email.." required autocomplete="off">
                <span id="emailSpan" class="aviso"></span>
                <!--campo clave-->
                <label for="">Clave</label>
                <input type="password" id="clave" name="clave" placeholder="tu clave.." required>
                <span id="claveSpan" class="aviso"></span>


                <button>Entrar</button>
                <a href="#" id="invitado" class="otroInicio">Entrar Como invitado</a>

            </form>
            <form id="formularioInvitado">
                <a href="./index.php"><img src="./public/img/logo.svg" alt="DawShop"></a>
                <h2>Iniciar Sesion <span>como Invitado</span></h2>
                <div id="informeInvitado"></div>
                <!--campo email-->
                <label for="email_invitado">Email</label>
                <input type="text" id="email_invitado" name="email" placeholder="tu email.." required>
                <span id="emailSpan" class="aviso"></span>
                <label for="codigo_pedido">Código del pedido</label>
                <input type="text" id="codigo_pedido" name="codigo_pedido" placeholder="tu código de pedido.." required>
                <span id="codigoPedidoSpan" class="aviso"></span>
                <button id="invitado_mandar">Entrar</button>
                <a href="#" id="login" class="otroInicio">Entrar Como Usuario</a>
            </form>

            <style>
                #formularioInvitado {
                    display: none;
                }
            </style>

        </div>
    </main>
    <!--footer-->
</body>

</html>