-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 20-02-2025 a las 10:29:39
-- Versión del servidor: 8.0.41
-- Versión de PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carrito`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PEDIDO`
--
DROP DATABASE IF EXISTS carrito;

CREATE DATABASE carrito;

USE carrito;

CREATE TABLE `PEDIDO` (
  `id` int NOT NULL AUTO_INCREMENT,  -- Agregado AUTO_INCREMENT
  `idUsuario` int DEFAULT NULL,
  `precioTotal` decimal(9,2) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)  -- La clave primaria debe estar especificada
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PEDIDO_ZAPATILLA`
--

CREATE TABLE `PEDIDO_ZAPATILLA` (
  `idPedido` int NOT NULL,
  `idZapatilla` int NOT NULL,
  `cantidad` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARIO`
--

CREATE TABLE `USUARIO` (
  `id` int NOT NULL AUTO_INCREMENT,  -- Agregado AUTO_INCREMENT
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(150) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `clave` varchar(255) DEFAULT NULL,
  `tipo` enum('REGISTRADO','INVITADO') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ZAPATILLA`
--

CREATE TABLE `ZAPATILLA` (
  `id` int NOT NULL AUTO_INCREMENT,  -- Agregado AUTO_INCREMENT
  `modelo` varchar(45) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Insertar datos en la tabla `ZAPATILLA`
--

INSERT INTO `ZAPATILLA` (`id`, `modelo`, `imagen`, `descripcion`, `precio`) VALUES
(1, 'Air Max 90', 'airmax90.jpg', 'Zapatillas clásicas de Nike con diseño retro.', 129.99),
(2, 'Yeezy Boost 350', 'yeezy350.jpg', 'Zapatillas icónicas de Kanye West y Adidas.', 220.00),
(3, 'Converse Chuck Taylor', 'chucktaylor.jpg', 'Clásicas Converse de lona en color blanco.', 59.99),
(4, 'Puma Suede Classic', 'pumasuede.jpg', 'Zapatillas de ante clásicas y versátiles.', 74.99),
(5, 'Vans Old Skool', 'vansoldskool.jpg', 'Modelo clásico de Vans con banda lateral.', 64.99),
(6, 'New Balance 574', 'nb574.jpg', 'Modelo retro de New Balance con gran comodidad.', 89.99),
(7, 'Jordan 1 Retro', 'jordan1.jpg', 'Zapatillas icónicas de baloncesto.', 170.00),
(8, 'Reebok Classic', 'reebokclassic.jpg', 'Zapatillas retro en cuero blanco.', 79.99),
(9, 'Asics Gel-Lyte III', 'asicsgellyte3.jpg', 'Modelo de running clásico con suela de gel.', 119.99),
(10, 'Fila Disruptor II', 'filadisruptor.jpg', 'Zapatillas chunky con suela gruesa.', 85.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `PEDIDO`
--
ALTER TABLE `PEDIDO`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `PEDIDO_ZAPATILLA`
--
ALTER TABLE `PEDIDO_ZAPATILLA`
  ADD PRIMARY KEY (`idPedido`,`idZapatilla`),
  ADD KEY `idZapatilla` (`idZapatilla`);

--
-- Indices de la tabla `USUARIO`
--
ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `ZAPATILLA`
--
ALTER TABLE `ZAPATILLA`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `PEDIDO`
--
ALTER TABLE `PEDIDO`
  ADD CONSTRAINT `PEDIDO_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `USUARIO` (`id`);

--
-- Filtros para la tabla `PEDIDO_ZAPATILLA`
--
ALTER TABLE `PEDIDO_ZAPATILLA`
  ADD CONSTRAINT `PEDIDO_ZAPATILLA_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `PEDIDO` (`id`),
  ADD CONSTRAINT `PEDIDO_ZAPATILLA_ibfk_2` FOREIGN KEY (`idZapatilla`) REFERENCES `ZAPATILLA` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
