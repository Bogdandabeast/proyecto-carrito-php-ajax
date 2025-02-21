<?php

include "../Model/bbdd.php";


$zapatillas = $conexion->prepare("SELECT * FROM zapatilla");
$zapatillas->execute();

$encontradas = $zapatillas->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($encontradas);

header('Content-Type: application/json');

?>