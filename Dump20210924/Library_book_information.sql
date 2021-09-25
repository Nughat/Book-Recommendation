-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: Library
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book_information`
--

DROP TABLE IF EXISTS `book_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_information` (
  `book_name` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `rating` int DEFAULT NULL,
  `author` varchar(100) NOT NULL,
  `age_range` varchar(45) NOT NULL,
  `maximum_pages` int NOT NULL,
  `publication_date` int NOT NULL,
  `trigger_warning` varchar(100) NOT NULL,
  `best_seller` tinyint NOT NULL,
  `series` tinyint NOT NULL,
  PRIMARY KEY (`book_name`),
  UNIQUE KEY `book_name_UNIQUE` (`book_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_information`
--

LOCK TABLES `book_information` WRITE;
/*!40000 ALTER TABLE `book_information` DISABLE KEYS */;
INSERT INTO `book_information` VALUES ('Craving: Hungry for more','cooking',25,'adeena Sussman','all',150,2010,'No trigger warning',0,0),('Harry Potter','fantasy',84,'J. K. Rowling','young adult',223,2005,'violence',0,1),('my own book','drama',45,'Mahir Mahboob','all',100,2020,'blood',1,0),('Romeo and Juliet','romance',87,'William Shakespeare','young adult',200,1960,'suicide',0,0),('The Hunger games','adventure',88,'susanne collins','adult',200,2011,'death',1,1),('The lightning Theif','action',81,'Rick Riordan','all',185,2012,'kidnapping',0,1),('The sea of the monster','action',91,'Rick Riordan','all',192,2014,'war',0,1),('The second book by Mahir','detective',99,'Mahir Mahboob','child',400,2021,'Animal cruelty',0,0),('The twilight sage','fantasy',94,'stephenie mayer ','all',198,2008,'vampire',1,1);
/*!40000 ALTER TABLE `book_information` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 20:28:30
