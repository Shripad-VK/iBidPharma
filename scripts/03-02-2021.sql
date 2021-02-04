CREATE DATABASE  IF NOT EXISTS `ibidpharma` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ibidpharma`;
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'35, Madhupushpa','Hingne Home Colony','Phule Nagar',300411,'Hyderabad','Andhra Pradesh'),(2,'495, Vasantooutsav','Near Sai Chowk','Nath Nagar',431401,'Kochi','Kerala'),(3,'400, Type 2','Labour Colony','Nehru Nagar',384001,'Mehsana','Gujarat'),(4,'304, Patil Estate','Near Good Luck','Prabhat Road',451010,'Indore','Madhya Pradesh'),(5,'95,Sardar Road','New Colony','Hemant Nagar',560037,'Banglore','Karnataka'),(6,'3, Sona Garden','Sahakar Nagar','Parvati',411044,'Pune','Maharashtra'),(7,'57,madhuvan road','lalbaag colony','shivaji nagar',411011,'Mumbai','Maharashtra'),(8,'504,Gurukrupa ','Aadarsh nagar','Devpur',420041,'Surat','Gujrat'),(9,'51,Ramnagar','Vassepur nagar','93 Avenue',421100,'Dhanabad','Uttar Pradesh'),(10,'101,NH 37','Junagad old colony','Junagad',422320,'Junagad','Gujarat'),(11,'Costa Blanca','Passport office road','Belgaon',537022,'Ludhiyana','Punjab'),(12,'Near old church,37','Airport Road','Bagha beach',432009,'Panjim','Goa'),(13,'Near Karnal Lake','Old Highway','Section 13',132001,'Karnal','Haryana'),(14,'Near Model Town','Subhash Nagar','City Park',124001,'Rohtak','Haryana');
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
  `uid` int(10) NOT NULL,
  PRIMARY KEY (`aid`),
  KEY `fk_user_admin_uid` (`uid`),
  CONSTRAINT `fk_user_admin_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Shripad','Kshirsagar',0);
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
  `bid_date` varchar(15) NOT NULL,
  `addr_id` int(10) NOT NULL,
  `stock` int(10) NOT NULL,
  `state` varchar(25) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_bid_addr_id` (`addr_id`),
  KEY `fk_distributor_bid_d_id` (`d_id`),
  KEY `fk_product_bid_pid` (`pid`),
  CONSTRAINT `fk_address_bid_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`),
  CONSTRAINT `fk_distributor_bid_d_id` FOREIGN KEY (`d_id`) REFERENCES `distributor` (`d_id`),
  CONSTRAINT `fk_product_bid_pid` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bid`
--

LOCK TABLES `bid` WRITE;
/*!40000 ALTER TABLE `bid` DISABLE KEYS */;
INSERT INTO `bid` VALUES (1,1,1,230,'18-01-2021',10,2000,'Gujarat',0),(2,2,2,85,'21-01-2021',11,700,'Punjab',0),(3,3,3,17,'23-01-2021',12,200,'Goa',0),(4,4,1,45,'25-01-2021',10,250,'Gujarat',0),(5,5,2,110,'28-01-2021',11,1500,'Punjab',0),(6,6,3,60,'30-01-2021',12,2000,'Goa',0),(7,1,1,235,'19-01-2021',10,1000,'Gujarat',0),(8,2,2,90,'22-01-2021',11,500,'Punjab',0),(9,3,3,16,'24-01-2021',12,230,'Goa',0),(10,4,1,55,'26-01-2021',10,100,'Gujarat',0),(11,5,2,120,'29-01-2021',11,900,'Punjab',0),(12,6,3,50,'30-01-2021',12,1200,'Goa',0),(13,1,1,230,'20-01-2021',10,4000,'Gujarat',0),(14,2,2,70,'29-01-2021',11,800,'Punjab',0),(15,3,3,18,'31-01-2021',12,150,'Goa',0),(16,4,1,42,'01-02-2021',10,280,'Gujarat',0),(17,5,2,95,'02-02-2021',11,2200,'Punjab',0),(18,6,3,48,'03-02-2021',12,2000,'Goa',0),(101,1,3,225,'22-12-2020',12,3000,'Goa',1),(102,4,1,55,'27-12-2020',10,250,'Gujarat',1),(103,7,1,160,'31-12-2020',10,500,'Gujarat',1),(104,6,3,65,'04-01-2021',12,2500,'Goa',1),(105,9,1,140,'09-01-2021',10,300,'Gujarat',1),(106,12,3,90,'11-01-2021',12,450,'Goa',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributor`
--

LOCK TABLES `distributor` WRITE;
/*!40000 ALTER TABLE `distributor` DISABLE KEYS */;
INSERT INTO `distributor` VALUES (1,'Gaia Trade Pvt. Ltd.',2,3),(2,'Ator Healthcare Pvt. Ltd.',3,4),(3,'KK Pharma',4,6),(4,'Meher Distributors Pvt Ltd.',14,8);
/*!40000 ALTER TABLE `distributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (42);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Wipro GE Healthcare Pvt. Ltd.',1,1),(2,'India Medtronic Pvt. Ltd.',6,2),(3,'Terumo Penpol Pvt. Ltd.',5,5),(4,'Bilcare Limited',13,7);
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
  `pimage` varchar(35) DEFAULT NULL,
  `addr_id` int(10) DEFAULT 10,
  `mid` int(10) DEFAULT 1,
  `state` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `fk_address_product_addr_id` (`addr_id`),
  CONSTRAINT `fk_address_product_addr_id` FOREIGN KEY (`addr_id`) REFERENCES `address` (`addr_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Covishield',5000,'Vaccine',200,250,'covishield.jpg',7,1,'Maharashtra'),(2,'Benadryl',1000,'Syrup',70,100,'benadryl.jpg',8,2,'Gujarat'),(3,'Naproxen',250,'Tablet',15,20,'naproxen.jpg',9,3,'Uttar Pradesh'),(4,'Visine',300,'Drops',40,60,'visine.jpg',7,1,'Maharashtra'),(5,'Morphine',2500,'Injection',90,130,'morphine.jpg',8,2,'Gujarat'),(6,'Mucinex',3500,'Capsule',45,75,'mucinex.jpg',9,3,'Uttar Pradesh'),(7,'Hepatitis-B',700,'Vaccine',150,170,'hepatitis.jpg',7,1,'Maharashtra'),(8,'Honitus',50,'Syrup',100,120,'honitus.jpg',8,2,'Gujarat'),(9,'Azithromycin',500,'Tablet',130,160,'azithromycin.jpg',9,3,'Uttar Pradesh'),(10,'Zaditor',150,'Drops',30,50,'zaditor.jpg',7,1,'Maharashtra'),(11,'Capreomycin',1800,'Injection',170,190,'capreomycin.jpg',8,2,'Gujarat'),(12,'Benazepril',400,'Capsule',80,100,'benazepril.jpg',9,3,'Uttar Pradesh');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `tid` int(10) NOT NULL AUTO_INCREMENT,
  `mid` int(10) NOT NULL,
  `mname` varchar(35) NOT NULL,
  `pid` int(10) NOT NULL,
  `pname` varchar(35) NOT NULL,
  `category` varchar(25) NOT NULL,
  `dist_id` int(10) NOT NULL,
  `dname` varchar(35) NOT NULL,
  `bid` int(10) NOT NULL,
  `bvalue` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `state` varchar(35) NOT NULL,
  `tdate` varchar(15) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,1,'Wipro GE Healthcare Pvt. Ltd.',1,'Covishield','Vaccine',3,'KK Pharma',101,225,3000,'Maharashtra','24-12-2020'),(2,1,'Wipro GE Healthcare Pvt. Ltd.',4,'Visine','Drops',1,'Gaia Trade Pvt. Ltd.',102,55,250,'Maharashtra','28-12-2020'),(3,1,'Wipro GE Healthcare Pvt. Ltd.',7,'Hepatitis-B','Vaccine',1,'Gaia Trade Pvt. Ltd.',103,160,500,'Maharashtra','02-01-2021'),(4,3,'Terumo Penpol Pvt. Ltd.',6,'Mucinex','Capsule',3,'KK Pharma',104,65,2500,'Uttar Pradesh','07-01-2021'),(5,3,'Terumo Penpol Pvt. Ltd.',9,'Azithromycin','Tablet',1,'Gaia Trade Pvt. Ltd.',105,140,300,'Uttar Pradesh','13-01-2021'),(6,3,'Terumo Penpol Pvt. Ltd.',12,'Benazepril','Capsule',3,'KK Pharma',106,90,450,'Uttar Pradesh','16-01-2021');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (0,'admin123','Admin',1,'8625010244','admin@gmail.com'),(1,'raj123','Manufacturer',1,'9444737078','rajnandinimali6@gmail.com'),(2,'shubham123','Manufacturer',0,'9527598295','pshubham97@gmail.com'),(3,'nikhil123','Distributor',1,'8947152114','nikhil.mathpati@gmail.com'),(4,'meghana123','Distributor',0,'7028511927','meghanapagare@gmail.com'),(5,'harsh123','Manufacturer',1,'7817426814','harsh.mehta@gmail.com'),(6,'neha123','Distributor',1,'7972096548','nehaswami0695@gmail.com'),(7,'amol123','Manufacturer',0,'9404879815','amol1996@gmail.com'),(8,'riya123','Distributor',0,'8877454812','riya.partani@gmail.com');
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

-- Dump completed on 2021-02-04  1:41:55
