-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 11 2021 г., 12:06
-- Версия сервера: 8.0.19
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id_cart` int NOT NULL,
  `id_client` int NOT NULL,
  `id_t_shirt` int NOT NULL,
  `quantity` int NOT NULL,
  `id_option` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `cart`
--

INSERT INTO `cart` (`id_cart`, `id_client`, `id_t_shirt`, `quantity`, `id_option`) VALUES
(32, 32, 21, 2, 39),
(32, 32, 4, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `categories_to_t_shirts`
--

CREATE TABLE `categories_to_t_shirts` (
  `id_category` int NOT NULL,
  `id_t_shirts` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `categories_to_t_shirts`
--

INSERT INTO `categories_to_t_shirts` (`id_category`, `id_t_shirts`) VALUES
(2, 1),
(1, 2),
(4, 3),
(4, 4),
(3, 4),
(1, 5),
(1, 6),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(3, 13),
(2, 13),
(2, 14),
(6, 14),
(6, 15),
(3, 15),
(2, 15),
(2, 16),
(3, 16),
(2, 17),
(6, 17),
(2, 18),
(6, 18),
(5, 20),
(5, 22),
(5, 21),
(5, 22),
(3, 21),
(5, 19),
(4, 19);

-- --------------------------------------------------------

--
-- Структура таблицы `categoties`
--

CREATE TABLE `categoties` (
  `id_category` int NOT NULL,
  `value` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `categoties`
--

INSERT INTO `categoties` (`id_category`, `value`) VALUES
(1, 'авто,мото'),
(2, 'айтишники'),
(3, 'интернет приколы'),
(4, 'праздники'),
(5, 'музыка'),
(6, 'юмор');

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `id_client` int NOT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `adress` varchar(500) COLLATE utf8_bin NOT NULL,
  `phone` varchar(100) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`id_client`, `username`, `adress`, `phone`, `password`, `email`) VALUES
(32, 'Halina', 'Ukraine,Nikolaev', '066-471-71-78', '1234567', 'galina.maslienikova@gmail.com'),
(47, 'galina.maslienikova@gmail.com', '1234567', 'Ukraine,Nikolaev', '023-987-98-98', 'khgcgfcd@gfrd.lk');

-- --------------------------------------------------------

--
-- Структура таблицы `color`
--

CREATE TABLE `color` (
  `id_color` int NOT NULL,
  `color_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `color`
--

INSERT INTO `color` (`id_color`, `color_value`) VALUES
(1, 'black'),
(2, 'white'),
(3, 'yellow'),
(4, 'red'),
(5, 'pink'),
(6, 'orange');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id_order` int NOT NULL,
  `id_client` int NOT NULL,
  `delivery` varchar(100) COLLATE utf8_bin NOT NULL,
  `id_payment` int NOT NULL,
  `id_status` int NOT NULL,
  `create_date` date NOT NULL,
  `details` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id_order`, `id_client`, `delivery`, `id_payment`, `id_status`, `create_date`, `details`) VALUES
(40, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":3,\"quantity\":4,\"id_t_shirts\":3,\"price\":102},{\"id_option\":4,\"quantity\":5,\"id_t_shirts\":3,\"price\":102}]'),
(41, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":33,\"quantity\":1,\"id_t_shirts\":17,\"price\":145}]'),
(42, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":33,\"quantity\":1,\"id_t_shirts\":17,\"price\":145}]'),
(43, 32, 'новая почта', 2, 2, '2021-06-10', '[{\"id_option\":33,\"quantity\":1,\"id_t_shirts\":17,\"price\":145}]'),
(44, 32, 'новая почта', 2, 2, '2021-06-10', '[{\"id_option\":39,\"quantity\":3,\"id_t_shirts\":21,\"price\":105}]'),
(45, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":35,\"quantity\":1,\"id_t_shirts\":22,\"price\":125}]'),
(46, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":35,\"quantity\":1,\"id_t_shirts\":22,\"price\":125}]'),
(47, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":41,\"quantity\":1,\"id_t_shirts\":20,\"price\":125}]'),
(48, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":35,\"quantity\":1,\"id_t_shirts\":22,\"price\":125},{\"id_option\":1,\"quantity\":3,\"id_t_shirts\":4,\"price\":103},{\"id_option\":30,\"quantity\":2,\"id_t_shirts\":18,\"price\":140}]'),
(49, 32, 'новая почта', 2, 2, '2021-06-10', '[{\"id_option\":9,\"quantity\":1,\"id_t_shirts\":1,\"price\":100},{\"id_option\":39,\"quantity\":1,\"id_t_shirts\":21,\"price\":105},{\"id_option\":29,\"quantity\":1,\"id_t_shirts\":16,\"price\":135},{\"id_option\":11,\"quantity\":1,\"id_t_shirts\":1,\"price\":100}]'),
(50, 32, 'новая почта', 2, 2, '2021-06-10', '[{\"id_option\":39,\"quantity\":1,\"id_t_shirts\":21,\"price\":105}]'),
(51, 32, 'новая почта', 1, 2, '2021-06-10', '[{\"id_option\":41,\"quantity\":1,\"id_t_shirts\":20,\"price\":125}]'),
(52, 32, 'новая почта', 2, 2, '2021-06-11', '[{\"id_option\":9,\"quantity\":5,\"id_t_shirts\":1,\"price\":100},{\"id_option\":42,\"quantity\":1,\"id_t_shirts\":20,\"price\":125},{\"id_option\":11,\"quantity\":1,\"id_t_shirts\":1,\"price\":100}]');

-- --------------------------------------------------------

--
-- Структура таблицы `order_status`
--

CREATE TABLE `order_status` (
  `id_status` int NOT NULL,
  `status_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `order_status`
--

INSERT INTO `order_status` (`id_status`, `status_value`) VALUES
(1, 'выполнен'),
(2, 'в обработке'),
(3, 'возврат');

-- --------------------------------------------------------

--
-- Структура таблицы `payments`
--

CREATE TABLE `payments` (
  `id_payment` int NOT NULL,
  `payment_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `payments`
--

INSERT INTO `payments` (`id_payment`, `payment_value`) VALUES
(1, 'наложеный платеж'),
(2, 'предоплата');

-- --------------------------------------------------------

--
-- Структура таблицы `product_option`
--

CREATE TABLE `product_option` (
  `id_option` int NOT NULL,
  `id_t_shirts` int NOT NULL,
  `id_type` int NOT NULL,
  `id_color` int NOT NULL,
  `id_size` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `product_option`
--

INSERT INTO `product_option` (`id_option`, `id_t_shirts`, `id_type`, `id_color`, `id_size`) VALUES
(1, 4, 6, 1, 3),
(2, 4, 1, 6, 2),
(3, 3, 4, 5, 1),
(4, 3, 5, 2, 4),
(5, 5, 3, 3, 1),
(6, 5, 2, 4, 2),
(7, 6, 6, 5, 3),
(8, 6, 5, 4, 4),
(9, 1, 3, 1, 1),
(10, 6, 5, 2, 2),
(11, 1, 1, 1, 4),
(12, 1, 4, 6, 1),
(13, 2, 5, 6, 2),
(14, 2, 2, 6, 2),
(15, 10, 5, 4, 4),
(16, 10, 3, 6, 3),
(17, 13, 3, 4, 3),
(18, 13, 6, 2, 1),
(19, 14, 3, 2, 3),
(20, 14, 6, 6, 2),
(21, 9, 2, 2, 2),
(22, 9, 1, 6, 3),
(23, 12, 6, 5, 3),
(24, 12, 1, 6, 3),
(25, 15, 1, 6, 1),
(26, 15, 3, 6, 2),
(29, 16, 6, 6, 2),
(30, 18, 5, 5, 3),
(31, 18, 6, 2, 3),
(32, 11, 1, 3, 2),
(33, 17, 1, 4, 2),
(34, 17, 6, 5, 3),
(35, 22, 1, 1, 3),
(36, 22, 5, 4, 2),
(37, 22, 6, 2, 1),
(38, 22, 3, 6, 4),
(39, 21, 4, 1, 1),
(40, 21, 1, 2, 3),
(41, 20, 1, 1, 3),
(42, 20, 4, 6, 1),
(43, 19, 5, 4, 1),
(44, 19, 4, 6, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `size`
--

CREATE TABLE `size` (
  `id_size` int NOT NULL,
  `size_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `size`
--

INSERT INTO `size` (`id_size`, `size_value`) VALUES
(1, 's'),
(2, 'm'),
(3, 'l'),
(4, 'xl');

-- --------------------------------------------------------

--
-- Структура таблицы `type`
--

CREATE TABLE `type` (
  `id_type` int NOT NULL,
  `type_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `type`
--

INSERT INTO `type` (`id_type`, `type_value`) VALUES
(1, 'мужская'),
(2, 'унисекс'),
(3, 'женская'),
(4, 'детская'),
(5, 'длинный рукав'),
(6, 'ringer');

-- --------------------------------------------------------

--
-- Структура таблицы `t_shirts`
--

CREATE TABLE `t_shirts` (
  `id_t_shirt` int NOT NULL,
  `price` int NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `Image` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `t_shirt_compose` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Название футболок и их состав';

--
-- Дамп данных таблицы `t_shirts`
--

INSERT INTO `t_shirts` (`id_t_shirt`, `price`, `name`, `Image`, `t_shirt_compose`) VALUES
(1, 100, 'computer', 'data:image/jpeg;base64,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', 'хл 100%'),
(2, 101, 'audi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ998n-GKJZ85llHMMW-0_yC3avTFLSjRgwJA&usqp=CAU', 'хл 90% пол 10%'),
(3, 102, 'flower', 'data:image/jpeg;base64,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', 'хл 95% виск 5%'),
(4, 103, 'smile', 'data:image/jpeg;base64,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', 'хл 100%'),
(5, 150, 'Bently', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRUVFRUYGRIZFRYZGhISGBEVEhgSGBUZGhkYGBgcIy4lHB4rHxgYJzgmKy8xNTU2GiQ7QD00Py40NTQBDAwMDw8QHxIRHDErIys/ODE9PzY0OzQxPzU/Oz8xNDQ0NDE9NDQ3NDc9MTE/PzQ0PTVAQD80PT80NzQxMTQzNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xABHEAACAQIDBQUEAwwIBwAAAAABAgADEQQSIQUGMUFRBxMiYXFSgZGhMkLBFCMkNFRigpKTsbPwQ3JzdLLCw9EXM1Nkg6LS/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABERICUYH/2gAMAwEAAhEDEQA/APZoiICIiAiIgIiICIiAiRJtOB7Qd+kw1Fkwro+KPNSHWmvNmtpm6A+vKB6BE+YqHaJtIG/3Y/vWmw+BW03+ze0Xaj3CP3pFibUA7AHhcIo0ge/RPDcR2lbUpECpTRSRcCpQq0yQOYDEXHpMHE9ru0Bw7gelNifm0D6AieUbkdqLYhzTxgp0xoFrpmVA1uDgk2v7V7D5z1NKgYAgggi4IIIIPQwLkREBERAREQEREBERAREQEREBERAREsYnELTRqjsFRQWZjoFUC5JgXpzu8e+GFwWlWpera4oU/FVI8xwUebWnA72dpL1c1LB5qaXscQ2lRgD9QfVB6nXXlPO6lMsSxJLE3LMSWJ6kniYHdbU7WsSx/B6NOmt+NTNVcj3FQOXXhObxO/O0nN2xbjypimgHl4FF/fNDaW3Go9YGZiNoYioPvleq442qVKjrf0JtI4YjLlP8iSUaSDrzEDCxOyeaNp0a/wC+dl2a7ZGDTEq9VEL5CodgofKr/W9SB75zoqGW3UHiIHWdoW3kxWGw4FdKlRaisVRqYKK1N84sDcAHKNTOAp4BmOpAHldjNkEX2ZdVrcBAUMMEXKo9SeJMztm7exWGP3iu6L7AOan+o11+UxAbyRS8D0DYnarWGmJpK6+3S8Dgeak2PxE9D2PvThMSB3VZc/8A03ISoP0Tx9RcT53C2vLiveB9QSs+fth724vDEBKrMg/oqpL07dACbr7iJ6luzvzQxNke1KudAjnwufzH5+h19YHXxEQEREBERAREQEREBERATyjtT3mDfgVJvCCDWZTxI1Wn7jqfQDrNr2hb6/c4OHw5/CCPHUH9Ep5D88/Lj0nkLt14876m/OBR7WPWx+Mpn0U9QJQkG0sK9lA6ORAoi6sPMyVRNF9bySDxH1l5xAiBpImT5S2YFJW8jIloE5US3mlbwLoMmrSxeTVoFxpZ+r75czSzVbQwIitlK+bAe6xmcj/vmmxDWNP+t9kzTXspaB7V2Z7y98hw9V81VNUZiSz0+YueJU/IjoZ38+X9l7QanUVkYq6kMjDiCP54T3rc/ehMbTAJC4hR46f+Zeqn5cIHTREQEREBERAREQE4vf3e5cGnd0yDinGnA92h07xh19kcz5CS303zTCK1OmVfFEaLxWmCPpP59F5+QnimLxLVXZ6jFnZszM2pJgWKlRme7EliSzMxJYsTckk8TIYlrA+hltHu7SuLPgPpAoj3tMerU8QA9q8rh38IMwqT3c/1rwNwp1l4zHpOOus2OGRXFgPGOIBIuuni+i2uusluDFltpuKNDopt5IzfuomZtHA03JXKpcDXKylr9CumX9UTPS45cyDGdTiNjoSuQHK2YF81MBGAOrIy+IDgRcEe8TYUN3nTulqYmnh3KC1FERq7kFiXCIM5FrDgR4SecdwxwwMqDO7fdl3SqVxVLEBQQSUpl6NXMCM4PjAsHBDWtmuLkZTi4XYSZ3WpTIRTZXD02Z9bAhAgCX08PEE25R3DHH3i87TEbPw6LcU0AH9IxpqoN+F3JU8uAmrxGFQ6hCwPOmgYfrU8Ow+cs9Qxz5MtudD6TO2myIMgW1QkEhs4KL6FEsx8wdJrUxCt4ToZZdRjYt9U/npIriibi2h0HX1lvG8h5mWqR1WUZlOsbqehnRbPxz02WpTYrUU3Vl4j/ceRnLJxQeZm0wlW1vhA9/3N3xp4xQjWTFBbmnwVwOLp9o4j01nXT5kw9ZkdWRirqQyupIZWHMGex7kb6rigKNchcUBodAlUDmo5P1X3joA7iIiAiIgJhbRSq1NxRZUqkeB3UugN+a3HL4efCZsQPm7a+Fq06tRK4YVwxLltSzE3zX5g8bzWv4RPoTeTdihjUAqArUX6FVLZ18vNfI/KeJ73buV8C2Wqt6Z0SsgPdv5fmt+afnxgcxQbxGVx72SW8MfEZb2lU0AgWGf73+lrLSGzj1hn8IHU39wltDqIGypm5uZk03PG9rcCNNZhUb8ZJq3T5QOipbRRyO9QXza1Ka0iQDa90dCCeJ0tM5KysAEq02N7KjuKbBgNL57Wvc2yIt/aE5RCQCTIJrM8xdel7qZ/umj90Iiq5BDq6eM65Ayo5V7sRry0BZiTbZKtQbw1fuc0gww4NTOGYWKU82ikHPfJ7p57s7HUalIYbElkVSWo4lBdqLHUqw4lSdfhqAAV7PD4usEVsQKWJqIpKYsJUDmn4RZcQhVj4XU8dczDXKb8vUstv4rZbvMU2xj1r2bEPSDB6VxQ7r71oyG5DWyakn63XXC2rX8bimAUzEhiRYIQbXJvYW52NgwJDKXC4u1cS4SoKbJhldyKlUI4Z1VihDOxLsxYGwJ1yNqLicJj6y5e7p3NMMWLMLM78AxHIDkPPrE87dG+xmNRSXaqisVH0WD1MpvYXRw45arVZfJRpNPjdsBrhFufbqim5PWyurMp9XaaNzKK2onWeYmpPUuCfO/nrxPxmPVa+vnLtMWcryNx8ZZtxB/nWaRFmJAv1kVOsmqEg2BIGpIBIA4XPSW4GQr3YGZlKpa485rkOsyC2sDe0KlwJfS9wQSCCCCCQQRwII4GavAVDyPuM6rdbYb46qKaXWmtjUqcQieXVjwA/wBoHo3ZvvXUxGbD1sz1EXMta1wUFhlqN7VzoeYv0ufQZrtjbKpYamKVFQqD3szc2ZvrMes2MBERAREQEw9o4CnXptSqor02FmVhcEfYeh5TMiB88b67l1NnOzqGfBsfDUAzMlz9Crbh5NwPrpOAxFYub/AT7BrUldSrAMrAgqwBBU8QQeInm+N7HsG9fvFqVEok3OHTKQDzCudVXy1tygeVbmbmYjaNQhPBRQjPXYEov5qj6zW5fG09B3v3AweB2XXampeuDRPf1bGprVRSFsLKCGOg9956nszZ1LD00o0UCU0FlVeA8yTqSeZOpnNdrK32XifWj8q6QPngiwsJSlTjPwl1DAysTgqgTN3b5QLlspsB1PlJ4TZVd0DJSdlN7Mqkg2JBsfUGbpsRRzMxejkagULK1Y4m5pZSAtsnHT0kaHdvhaKZ8MrqlVWau+JSohaq5UqEBU6EHxAzn1fjWRzmIw7qmcowp5ymcg5O8UXKX9oDlM7Z2zcaWdKFOvnQIzpRzqyhwGRmCnmACD5CbLA7Yp0sOlCparRfEYgV6K/SNMrRFOrTJGjgq5U87EHjK4naFFdrU6tOqGwyVsIe+1VSlOnSDMw8srXHkZdvxGvxWzMUjFa9OqHWmahWoHLCktlZ9eCiwF/ITCo4SpVbJTRnqWJyICWsOJtNzsfEIa+Nz1URauHxVNKlQtkzO6lQSASBYHlK7KVMPXJevQdXw9dcyvV7sMyZVVzlVgCTy85dyDR4rZGIRlR6LqzmyKykF26L1OomGuHc57I3g+nofBrbxdNdJn7cVQysj0bH6mGeuwUjXMTUFwT5HlLm2dqmrToi65mXPWygAtWBKhn6nKAfeTLtGnrGzK3kIqr4j5xW1VfK4lKp4HylR7f2HYBDgcQzIp7zEMjZgDmprTTwm/EXZtPOeRb3bIOExmIw5FglQ5ehpN4kP6pE9x7E1tsxT1rVT8wPskO1HcY49BXoD8LpiwBNhVpanJfgGBJIJ6kHyD55XjL8picM9J2R1ZKikhkcEMpHIgzt9xezqvjiKtYGlhOOciz1B0pg8vzjp0vyDW7nbr4jH1ctIZaakZ6zXyIvQe0x5KPfYT6I3e2FRwdFaNFbDiznV3fmzHmfkBoNJf2RsujhqS0aCBKa8FXmebMTqWPMnWbCAiIgIiICIiAiIgIiICct2k082zMYOlLN71ZW+ydTNBv1SL7Oxqjj9zVT+qhb7IHzHSI5/wAiXsw5TFl1eEAp1k3aWklXMCDtIKdZRpRTAzKchXMlSMt1zAx6hkLydXgJZgXfqnyMrV+iJFDo3pDfQ98D6R7I6OXZeG/O71vjWe3yAnazndwKYXZuCA/J6Z97LmPzJnRQNFtXdXB4mqlavh0eqhFnIIJtwDgaOB0a4m7CgaAadJKICIiAiIgIiICIiAiIgIiICaner8Sxn91r/wAJptpibToh6NVDwem6m3GzKQf3wPkpRLjnSW1OgPkLyrnQCBOlKVDKpLTtAjCQIWBk0zI1pVDIVjAsPwloy63CWjAkh/cZVT4SJBDqJUNx9DA+q9xxbZ+BB4/ctH+Gs301+wUthsOOlCkPhTWbCAiIgIiICIiAiIgIiICIiAiIgJbqi4I6gj4iXIgfIdVMrMvssy/qsR9ksudZm7XXLiMQPZr1h8KjTAXjAyAdJjsZeYyxAkIEXiBfSQrSSS3VgW24S00vSy0CghuJlJJuMD692N+L0P7Gn/gWZs1+wfxbDf2FL+Gs2EBERAREQEREBERAREQEREBERAREpA+Vd71y4/GgC34TX0/8jTT05uN88UKuOxbi1jXqWIFhlVsoNvRZqFgVcy2sk5kbwDGVBltpVTAyKct1DLi8JaqQI8pFpUSkC3JNy9JGXsOoLKDwLAH0JED662UtqFEdKVMfBRMyQQWAA4WEnAREQEREBERAREQEREBERAREQEwtrYsUaFaq30adN3NrXsiltL89Jmzi+1nHd1svEW41MlMfpuM3/qGgfNzuWYljdiSSeZY6k/GTGkgolWMCjGBKSLGAJkllu8uLAvCWnk7yDQIiUlAYECEkD8QbyJgQPr/ZGJFWhRqAgh6SPcag5lBv85mzkuy/F95svCMeKo1P9m7IPkonWwEREBERAREQEREBERAREQEREBPMe3auVwVFRwfErf0VHP756dPK+3v8Vw394/03geHILSh1lS8pmgUaQMrIwAl1ZaEuJAmWkGMkZFoEJWRlRAiYlWlIH0R2I4jNs0L7Feqvxyv/AJ56JPLuwU/gVcf9038Gn/tPUYCIiAiIgIiICIiAiIgIiICIiAnlfb3+KYb+8/6Tz1SeUdvhP3NhhbTv216EU2sPfc/CB4cJWBBECjSF5UyloAS4ktyawLhltpUGRaBG0raUk8sCLSMuZZbIge49gOIvQxac1q029zoR/knrc8Q7Aajd7jFt4DTpktcWDBmAFvME/qz2+AiIgIiICIiAiIgIiICIiAiIgJzm+u7K7Qw5oM2VwwdKlr5agBAuOakEg+s6OIHznjuyradO+WmlUX40qi6jrZ8s1NTcXai8cFV/RCt/hJn1FED5XO5m0vyLEfs2lBuXtL8ir/s2n1TED5WO5W0RxwWI91Nj9k1mM2bWof8AOo1Kdzb76jpcjkMwF59eS1WpKwKsoZTxVgCpHmDA+PhaQIHn8p9ObQ7O9m1nzvhlDc+6apSU681QgEzF/wCFeyvydv22J/8AuB83I9uUn3npPpGh2Y7LRgww1yDez1KzqfVWYgj1nQYfd/CJbJhaC24ZaVIEH1tA+W8Bs6vXNqFGpUN7HukdgD5kDT3zotm9mW0651od0vt12VBx9kXb5T6TRABYAAdALCTgcX2ebkjZtN81QPWqlc7KuVFC3sq31I1Op+AnaREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k=', 'хл 100%'),
(6, 150, 'Race', 'data:image/jpeg;base64,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', 'хл 100%'),
(9, 130, 'Renault', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAgNth92NBtlJrxqJKJ80BxVohQYmFXzDRg&usqp=CAU', 'хл 90% пол 10%'),
(10, 130, 'Infiniti', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcDWQHDTmZx2IVPQJ2BzmEbI3LNZdxYMRZQ&usqp=CAU', 'хл 90% пол 10%'),
(11, 145, 'BMW', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh7DHg2wtigCCeLqcxNmJ05g6RpIAAYN1kw&usqp=CAU', 'хл 95% виск 5%'),
(12, 145, 'Pegaut', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RBnm5O83n6yKt5hugWYSKJN1sfRv35bbhA&usqp=CAU', 'хл 95% виск 5%'),
(13, 150, 'Game Over', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOBwRTY-WG5AYAXT8ZV65DDomM6_X2IE4dA&usqp=CAU', 'хл 100%'),
(14, 150, 'CatComp', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX1Z99oe3zZYkXz6p3CuEX7Nhdchm7x6orjA&usqp=CAU', 'хл 100%'),
(15, 135, 'I am ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjvAL7RYU8ajQrnxp10_TZXqL2lwEHlEcKw&usqp=CAU', 'хл 90% пол 10%'),
(16, 135, 'Trust Me (comp)', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYWBZUc66PEijvxd8tQq1ymRnPztbg09Eag&usqp=CAU', 'хл 90% пол 10%'),
(17, 145, 'Keep kalm', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsPMcFCETyDgy7zOKwDHN96QVKM120LvKGA&usqp=CAU', 'хл 95% виск 5%'),
(18, 140, 'Lazy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrcbH8TVWb0iYCok-feXRkewQX4542nIfPw&usqp=CAU', 'хл 95% виск 5%'),
(19, 120, 'Red music', 'https://maikoff.ua/uploaded/prints_spool/6/p5168l6555w252o118t2c1front0big-zhenskaya-futbolka-4188-muzika-mikrofon.jpg', '100%хл'),
(20, 125, 'Україна ', 'https://shalena-maika.ua/Store/CatalogueItems/010%20%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%BF%D0%B0%D1%82%D1%80%D0%B8%D0%BE%D1%82%D0%BE%D0%B2.jpg', '100% хл'),
(21, 105, 'The Simpsom ', 'https://shalena-maika.ua/Store/CatalogueItems/01%200074%20Simpsons%20Music%202.jpg', '100%хл.'),
(22, 125, 'Music is Life', 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/full_print_boy_tee/tile/face416d96ba80fa4a2ebfc11a4257bca94a394b.png?1540324873', 'хл 95% виск 5%');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_product` (`id_t_shirt`),
  ADD KEY `id_option` (`id_option`);

--
-- Индексы таблицы `categories_to_t_shirts`
--
ALTER TABLE `categories_to_t_shirts`
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_t_shirts` (`id_t_shirts`);

--
-- Индексы таблицы `categoties`
--
ALTER TABLE `categoties`
  ADD PRIMARY KEY (`id_category`);

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Индексы таблицы `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id_color`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`) USING BTREE,
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_payment` (`id_payment`),
  ADD KEY `id_status` (`id_status`);

--
-- Индексы таблицы `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id_status`);

--
-- Индексы таблицы `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id_payment`);

--
-- Индексы таблицы `product_option`
--
ALTER TABLE `product_option`
  ADD PRIMARY KEY (`id_option`),
  ADD KEY `id_t_shirts` (`id_t_shirts`),
  ADD KEY `id_type` (`id_type`),
  ADD KEY `id_color` (`id_color`),
  ADD KEY `id_size` (`id_size`);

--
-- Индексы таблицы `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id_size`);

--
-- Индексы таблицы `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id_type`);

--
-- Индексы таблицы `t_shirts`
--
ALTER TABLE `t_shirts`
  ADD PRIMARY KEY (`id_t_shirt`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categoties`
--
ALTER TABLE `categoties`
  MODIFY `id_category` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT для таблицы `color`
--
ALTER TABLE `color`
  MODIFY `id_color` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id_status` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `payments`
--
ALTER TABLE `payments`
  MODIFY `id_payment` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `product_option`
--
ALTER TABLE `product_option`
  MODIFY `id_option` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT для таблицы `size`
--
ALTER TABLE `size`
  MODIFY `id_size` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `type`
--
ALTER TABLE `type`
  MODIFY `id_type` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `t_shirts`
--
ALTER TABLE `t_shirts`
  MODIFY `id_t_shirt` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`id_t_shirt`) REFERENCES `t_shirts` (`id_t_shirt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_4` FOREIGN KEY (`id_option`) REFERENCES `product_option` (`id_option`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `categories_to_t_shirts`
--
ALTER TABLE `categories_to_t_shirts`
  ADD CONSTRAINT `categories_to_t_shirts_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categoties` (`id_category`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_to_t_shirts_ibfk_2` FOREIGN KEY (`id_t_shirts`) REFERENCES `t_shirts` (`id_t_shirt`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_payment`) REFERENCES `payments` (`id_payment`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`id_status`) REFERENCES `order_status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `product_option`
--
ALTER TABLE `product_option`
  ADD CONSTRAINT `product_option_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `type` (`id_type`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_option_ibfk_2` FOREIGN KEY (`id_t_shirts`) REFERENCES `t_shirts` (`id_t_shirt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_option_ibfk_3` FOREIGN KEY (`id_size`) REFERENCES `size` (`id_size`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_option_ibfk_4` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
