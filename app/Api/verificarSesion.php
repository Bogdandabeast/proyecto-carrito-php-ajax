<?php

session_start();


header("Content-Type:application/json");


if(isset($_SESSION["usuarioID"])){
$mensaje = [
    "logeado"=> true
];

}else{
    $mensaje = [
        "logeado"=> false
    ];
}

echo json_encode($mensaje);

?>