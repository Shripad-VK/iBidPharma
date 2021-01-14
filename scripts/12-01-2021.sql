-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: ibidpharma
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `addr_id` int(10) NOT NULL AUTO_INCREMENT,
  `line1` varchar(45) DEFAULT NULL,
  `line2` varchar(45) DEFAULT NULL,
  `area` varchar(45) DEFAULT NULL,
  `pin_code` int(6) NOT NULL,
  `city` varchar(35) NOT NULL,
  `state` varchar(25) NOT NULL,
  PRIMARY KEY (`addr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'35, Madhupushpa','Hingne Home Colony','Phule Nagar',300411,'Hyderabad','Andhra Pradesh'),(2,'495, Vasantooutsav','Near Sai Chowk','Nath Nagar',431401,'Kochi','Kerala'),(3,'400, Type 2','Labour Colony','Nehru Nagar',384001,'Mehsana','Gujarat'),(4,'304, Patil Estate','Near Good Luck','Prabhat Road',451010,'Indore','Madhya Pradesh'),(5,'95,Sardar Road','New Colony','Hemant Nagar',560037,'Banglore','Karnataka'),(6,'3, Sona Garden','Sahakar Nagar','Parvati',411044,'Pune','Maharashtra'),(7,'57,madhuvan road','lalbaag colony','shivaji nagar',411011,'Pune','Maharashtra'),(8,'504,Gurukrupa ','Aadarsh nagar','Devpur',420041,'Surat','Gujrat'),(9,'51,Ramnagar','Vassepur nagar','93 Avenue',421100,'Dhanabad','Uttar Pradesh'),(10,'101,NH 37','Junagad old colony','Junagad',422320,'Junagad','Gujrat'),(11,'Costa Blanca','Passport office road','Belgaon',537022,'Ludhiyana','Punjab'),(12,'Near old church,37',NULL,'Bagha beach',432009,'Panjim','Goa');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `aid` int(10) NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(20) NOT NULL,
  `addr_id` int(10) NOT NULL,
  PRIMARY KEY (`aid`),
  KEY `fk_address_admin_addr_id` (`addr_id`),
  CONSTRAINT `fk_address_admin_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Shripad','Kshirsagar','8625010244','shripad000@gmail.com','sk123',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bid`
--

DROP TABLE IF EXISTS `bid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bid` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) NOT NULL,
  `d_id` int(10) NOT NULL,
  `bvalue` int(10) NOT NULL,
  `bid_date` date NOT NULL,
  `addr_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_bid_addr_id` (`addr_id`),
  KEY `fk_distributor_bid_d_id` (`d_id`),
  KEY `fk_product_bid_pid` (`pid`),
  CONSTRAINT `fk_address_bid_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`),
  CONSTRAINT `fk_distributor_bid_d_id` FOREIGN KEY (`d_id`) REFERENCES `distributor` (`d_id`),
  CONSTRAINT `fk_product_bid_pid` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bid`
--

LOCK TABLES `bid` WRITE;
/*!40000 ALTER TABLE `bid` DISABLE KEYS */;
/*!40000 ALTER TABLE `bid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributor`
--

DROP TABLE IF EXISTS `distributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distributor` (
  `d_id` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(45) NOT NULL,
  `addr_id` int(10) NOT NULL,
  `uid` int(10) NOT NULL,
  PRIMARY KEY (`d_id`),
  KEY `fk_address_distributor_addr_id` (`addr_id`),
  KEY `fk_user_distributor_uid` (`uid`),
  CONSTRAINT `fk_address_distributor_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`),
  CONSTRAINT `fk_user_distributor_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor`
--

LOCK TABLES `distributor` WRITE;
/*!40000 ALTER TABLE `distributor` DISABLE KEYS */;
INSERT INTO `distributor` VALUES (1,'Gaia Trade Pvt. Ltd.',2,3),(2,'Ator Healthcare Pvt. Ltd.',3,4),(3,'KK Pharma',4,6);
/*!40000 ALTER TABLE `distributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturer` (
  `mid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(45) NOT NULL,
  `addr_id` int(10) NOT NULL,
  `uid` int(10) NOT NULL,
  PRIMARY KEY (`mid`),
  KEY `fk_address_manufacturer_addr_id` (`addr_id`),
  KEY `fk_user_manufacturer_uid` (`uid`),
  CONSTRAINT `fk_address_manufacturer_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`),
  CONSTRAINT `fk_user_manufacturer_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Wipro GE Healthcare Pvt. Ltd.',1,1),(2,'India Medtronic Pvt. Ltd.',6,2),(3,'Terumo Penpol Pvt. Ltd.',5,5);
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `pid` int(10) NOT NULL AUTO_INCREMENT,
  `pname` varchar(30) NOT NULL,
  `stock` int(10) NOT NULL,
  `category` varchar(25) NOT NULL,
  `min_bvalue` int(10) NOT NULL,
  `max_bvalue` int(10) NOT NULL,
  `pimage` varchar(35) NOT NULL,
  `addr_id` int(10) NOT NULL,
  `mid` int(10) NOT NULL,
  PRIMARY KEY (`pid`),
  KEY `fk_address_product_addr_id` (`addr_id`),
  CONSTRAINT `fk_address_product_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `password` varchar(20) NOT NULL,
  `utype` varchar(15) NOT NULL,
  `status` int(1) NOT NULL,
  `contact_no` varchar(15) NOT NULL,
  `email` varchar(35) NOT NULL,
  PRIMARY KEY (`uid`,`status`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'raj123','Manufacturer',1,'9444737078','rajnandinimali6@gmail.com'),(2,'shubham123','Manufacturer',0,'9527598295','pshubham97@gmail.com'),(3,'nikhil123','Distributor',1,'8947152114','nikhil.mathpati@gmail.com'),(4,'meghana123','Distributor',0,'7028511927','meghanapagare@gmail.com'),(5,'harsh123','Manufacturer',0,'7817426814','harsh.mehta@gmail.com'),(6,'neha123','Distributor',0,'7972096548','nehaswami0695@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-12 20:36:09
