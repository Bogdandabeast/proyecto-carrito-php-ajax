<?php

$servidor = "mysql";
$usuario = "user";
$bbdd = "carrito";
$password = "userpassword";

try {

    $conexion = new PDO("mysql:host=$servidor;dbname=$bbdd", $usuario, $password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //conexion correcta
} catch (PDOException $e) {

    echo 'Falló la conexión: ' . $e->getMessage();
} finally {
    // echo "conexion exito";
}
