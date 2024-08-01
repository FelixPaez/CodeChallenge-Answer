-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-08-2024 a las 04:29:17
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `student_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `grade` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`id`, `firstName`, `lastName`, `email`, `age`, `grade`) VALUES
(29, 'ffffffffffffffffffffffff', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 1, '2nd'),
(33, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '2nd'),
(34, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '2nd'),
(35, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '2nd'),
(36, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '1st'),
(37, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '3rd'),
(38, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '2nd'),
(39, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 12, '1st'),
(40, 'ffffffffffffffffffffffff', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '2nd'),
(42, 'ffffffffffffffffffffffff', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '1st'),
(43, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '2nd'),
(45, 'f', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', -2, '1st'),
(46, 'ffffffffffffffffffffffff', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '1st'),
(47, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '2nd'),
(48, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '2nd'),
(49, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 0, '2nd'),
(50, 'new', 'new', 'felitopaez044@gmail.com', 1, '2nd'),
(51, 'asdasdasdsad', 'asdasdasasdsaddsadasd', 'felitopaez044@gmail.com', 2, '1st'),
(52, 'este', 'este', 'este', 2, '2nd'),
(53, 'last', 'emp', 'felitopaez044@gmail.com', 2, '3rd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
