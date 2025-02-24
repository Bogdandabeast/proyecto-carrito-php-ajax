-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2025 a las 14:06:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `precioTotal` decimal(9,2) DEFAULT NULL,
  `fecha` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `idUsuario`, `precioTotal`, `fecha`) VALUES
(76, 30, 1119.91, '2025-02-24 13:18:29'),
(77, 31, 4099.90, '2025-02-24 13:49:56'),
(78, 31, 4099.90, '2025-02-24 13:49:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_zapatilla`
--

CREATE TABLE `pedido_zapatilla` (
  `idPedido` int(11) NOT NULL,
  `idZapatilla` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido_zapatilla`
--

INSERT INTO `pedido_zapatilla` (`idPedido`, `idZapatilla`, `cantidad`) VALUES
(76, 1, 2),
(76, 2, 2),
(76, 3, 7),
(78, 1, 6),
(78, 2, 14),
(78, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(150) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `clave` varchar(255) DEFAULT NULL,
  `tipo` enum('REGISTRADO','INVITADO') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `email`, `clave`, `tipo`) VALUES
(24, 'Sammy', 'Dian Yañez', 'sammydianya@gmail.com', '$2y$10$RSiKvrHluwgZl4/AK3rxzuSqwSIe9xSinvAXqTzuEBsSslF.I9dla', 'REGISTRADO'),
(25, 'Prueba', 'Prueba Prueba', 'sammmy2@gmail.com', '$2y$10$PK/pyaMEP6dWTwhuPzWvY.p7mYntMWeL4oT/J.c3lHiCU77sdEvM.', 'REGISTRADO'),
(26, 'maria', 'antonieta', 'maria@hotmail.com', '$2y$10$uqAfD9TtHgxklND/zKRlcOM7v0c28ShfjPuatGFCo0DbU1LWTsD/2', 'REGISTRADO'),
(27, NULL, NULL, 'sepicaliente@gmail.com', NULL, 'INVITADO'),
(29, NULL, NULL, 'sepicaliente@gmail.com', NULL, 'INVITADO'),
(30, NULL, NULL, 'sepicaliente@gmail.com', NULL, 'INVITADO'),
(31, 'Sammy', 'Dian', 'sammy@gmail.com', '$2y$10$q2SV4gp4RMNGn52UZaed3uaOWhHzqfCtC./OAM.cgeMcUumJ54RDi', 'REGISTRADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zapatilla`
--

CREATE TABLE `zapatilla` (
  `id` int(11) NOT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `zapatilla`
--

INSERT INTO `zapatilla` (`id`, `modelo`, `imagen`, `descripcion`, `precio`) VALUES
(1, 'Air Max 90', 'airmax90.png', 'Zapatillas clásicas de Nike con diseño retro.', 129.99),
(2, 'Yeezy Boost 350', 'yezzebost.png', 'Zapatillas icónicas de Kanye West y Adidas.', 220.00),
(3, 'Converse Chuck Taylor', 'converse-chuck.png', 'Clásicas Converse de lona en color blanco.', 59.99),
(4, 'Puma Suede Classic', 'Suede-Classic.png', 'Zapatillas de ante clásicas y versátiles.', 74.99),
(5, 'Vans Old Skool', 'oldskool.png', 'Modelo clásico de Vans con banda lateral.', 64.99),
(6, 'New Balance 574', 'new_balance.png', 'Modelo retro de New Balance con gran comodidad.', 89.99),
(7, 'Jordan 1 Retro', 'air-jordan-1.png', 'Zapatillas icónicas de baloncesto.', 170.00),
(8, 'Reebok Classic', 'rebook.png', 'Zapatillas retro en cuero blanco.', 79.99),
(9, 'Asics Gel-Lyte III', 'asics.png', 'Modelo de running clásico con suela de gel.', 119.99),
(10, 'Fila Disruptor II', 'fila.png', 'Zapatillas chunky con suela gruesa.', 85.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `zapatilla`
--
ALTER TABLE `zapatilla`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
