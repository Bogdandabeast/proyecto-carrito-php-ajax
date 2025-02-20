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

CREATE TABLE `PEDIDO` (
  `id` int NOT NULL,
  `idUsuario` int DEFAULT NULL,
  `precioTotal` decimal(9,2) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PEDIDO_ZAPATILLA`
--

CREATE TABLE `PEDIDO_ZAPATILLA` (
  `idPedido` int NOT NULL,
  `idZapatilla` int NOT NULL,
  `cantidad` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARIO`
--

CREATE TABLE `USUARIO` (
  `id` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(150) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `clave` varchar(255) DEFAULT NULL,
  `tipo` enum('REGISTRADO','INVITADO') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ZAPATILLA`
--

CREATE TABLE `ZAPATILLA` (
  `id` int NOT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
