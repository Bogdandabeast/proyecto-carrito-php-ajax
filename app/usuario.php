<?php
    session_start();

    if(!isset($_SESSION["REGISTRADO"])) {

        header("Location: index.php");
        exit();
    }

    include("Model/bbdd.php");






?>    