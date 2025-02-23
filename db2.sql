-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 23-02-2025 a las 16:13:28
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
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int NOT NULL,
  `idUsuario` int DEFAULT NULL,
  `precioTotal` decimal(9,2) DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `idUsuario`, `precioTotal`, `fecha`) VALUES
(1, 3, 2.00, '2025-02-23 13:26:01'),
(3, 3, 2.00, '2025-02-23 13:26:56'),
(4, 3, 2.00, '2025-02-23 13:27:58'),
(5, 3, 2.00, '2025-02-23 13:28:04'),
(6, 120, 2.00, '2025-02-23 13:28:48'),
(7, 120, 2.00, '2025-02-23 13:29:01'),
(8, 120, 2.00, '2025-02-23 13:29:16'),
(9, 120, 2.00, '2025-02-23 13:33:50'),
(10, 120, 2.00, '2025-02-23 13:34:30'),
(11, 120, 2.00, '2025-02-23 13:35:01'),
(12, 120, 2.00, '2025-02-23 13:35:31'),
(13, 400, 2.00, '2025-02-23 13:36:05'),
(14, 400, 2.00, '2025-02-23 13:37:33'),
(15, 400, 2.00, '2025-02-23 13:39:01'),
(16, 400, 2.00, '2025-02-23 13:39:49'),
(17, 400, 2.00, '2025-02-23 13:39:51'),
(18, 400, 2.00, '2025-02-23 13:39:52'),
(19, 400, 2.00, '2025-02-23 13:40:13'),
(20, 400, 2.00, '2025-02-23 13:40:28'),
(21, 400, 2.00, '2025-02-23 13:40:38'),
(22, 400, 2.00, '2025-02-23 13:41:19'),
(23, 400, 2.00, '2025-02-23 13:41:19'),
(24, 400, 2.00, '2025-02-23 13:47:22'),
(25, 400, 2.00, '2025-02-23 13:47:22'),
(26, 400, 2.00, '2025-02-23 13:47:27'),
(27, 400, 2.00, '2025-02-23 13:47:27'),
(28, 400, 2.00, '2025-02-23 13:49:25'),
(29, 400, 2.00, '2025-02-23 13:49:25'),
(30, 0, 2.00, '2025-02-23 13:49:38'),
(31, 0, 2.00, '2025-02-23 13:49:38'),
(32, 0, 2.00, '2025-02-23 13:50:12'),
(33, 0, 2.00, '2025-02-23 13:50:12'),
(34, 0, 2.00, '2025-02-23 13:50:55'),
(35, 0, 2.00, '2025-02-23 13:50:55'),
(36, 0, 2.00, '2025-02-23 13:51:25'),
(37, 0, 2.00, '2025-02-23 13:51:25'),
(38, 0, 2.00, '2025-02-23 13:51:50'),
(39, 0, 2.00, '2025-02-23 13:51:50'),
(40, 0, 2.00, '2025-02-23 13:52:20'),
(41, 0, 2.00, '2025-02-23 13:52:20'),
(42, 0, 2.00, '2025-02-23 13:52:44'),
(43, 0, 2.00, '2025-02-23 13:52:44'),
(44, 0, 2.00, '2025-02-23 13:54:35'),
(45, 0, 2.00, '2025-02-23 13:54:35'),
(46, 0, 2.00, '2025-02-23 13:55:24'),
(47, 0, 2.00, '2025-02-23 13:55:24'),
(48, 2, 299.99, '2025-02-22 14:30:00'),
(49, 3, 339.98, '2025-02-22 15:45:00'),
(50, 2, 334.98, '2025-02-23 10:20:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_zapatilla`
--

CREATE TABLE `pedido_zapatilla` (
  `idPedido` int NOT NULL,
  `idZapatilla` int NOT NULL,
  `cantidad` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido_zapatilla`
--

INSERT INTO `pedido_zapatilla` (`idPedido`, `idZapatilla`, `cantidad`) VALUES
(11, 60, 2),
(12, 3, 2),
(13, 3, 2),
(13, 4, 2),
(13, 5, 2),
(14, 3, 2),
(14, 4, 2),
(14, 5, 2),
(15, 3, 2),
(15, 4, 2),
(15, 5, 2),
(16, 3, 2),
(16, 4, 2),
(16, 5, 2),
(17, 3, 2),
(17, 4, 2),
(17, 5, 2),
(18, 3, 2),
(18, 4, 2),
(18, 5, 2),
(19, 3, 2),
(19, 4, 2),
(19, 5, 2),
(20, 3, 2),
(20, 4, 2),
(20, 5, 2),
(21, 3, 2),
(21, 4, 2),
(21, 5, 2),
(23, 3, 2),
(23, 4, 2),
(23, 5, 2),
(25, 3, 2),
(25, 4, 2),
(25, 5, 2),
(27, 3, 2),
(27, 4, 2),
(27, 5, 2),
(29, 3, 2),
(29, 4, 2),
(29, 5, 2),
(48, 1, 1),
(48, 10, 2),
(49, 2, 1),
(49, 3, 2),
(50, 7, 1),
(50, 6, 1),
(50, 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `nombre` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `apellidos` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `clave` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipo` enum('REGISTRADO','INVITADO') COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellidos`, `email`, `clave`, `tipo`) VALUES
(2, 'Sammy', 'Dian Yañez', 'sammydianya@gmail.com', '$2y$10$bKLYBlVc6MlQW9d6RO0l6eAoeRtwf.V277TR5gCmV4et9M9Ir47L.', 'REGISTRADO'),
(3, 'maria', 'antonieta', 'maria@hotmail.com', '$2y$10$0hUbkHcEp2QaFUB0plnKxedkczogN6oa88Dkf2ad.dZZ1jHUtddpS', 'REGISTRADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zapatilla`
--

CREATE TABLE `zapatilla` (
  `id` int NOT NULL,
  `modelo` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
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
-- Indices de la tabla `pedido_zapatilla`
--
ALTER TABLE `pedido_zapatilla`
  ADD KEY `idZapatilla` (`idZapatilla`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
