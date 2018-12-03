-- MySQL dump 10.13  Distrib 5.6.31, for Linux (x86_64)
--
-- Host: localhost    Database: student_module_history_test
-- ------------------------------------------------------
-- Server version	5.6.31

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
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2016-07-26 19:21:30.513821'),(2,'auth','0001_initial','2016-07-26 19:21:30.613568'),(3,'admin','0001_initial','2016-07-26 19:21:30.674477'),(4,'sites','0001_initial','2016-07-26 19:21:30.691256'),(5,'contenttypes','0002_remove_content_type_name','2016-07-26 19:21:30.878068'),(6,'api_admin','0001_initial','2016-07-26 19:21:31.032875'),(7,'api_admin','0002_auto_20160325_1604','2016-07-26 19:21:31.076960'),(8,'api_admin','0003_auto_20160404_1618','2016-07-26 19:21:31.548382'),(9,'api_admin','0004_auto_20160412_1506','2016-07-26 19:21:31.794592'),(10,'api_admin','0005_auto_20160414_1232','2016-07-26 19:21:33.638939'),(11,'api_admin','0006_catalog','2016-07-26 19:21:33.654194'),(12,'assessment','0001_initial','2016-07-26 19:21:34.650281'),(13,'assessment','0002_staffworkflow','2016-07-26 19:21:34.668684'),(14,'auth','0002_alter_permission_name_max_length','2016-07-26 19:21:34.714844'),(15,'auth','0003_alter_user_email_max_length','2016-07-26 19:21:34.761841'),(16,'auth','0004_alter_user_username_opts','2016-07-26 19:21:34.813322'),(17,'auth','0005_alter_user_last_login_null','2016-07-26 19:21:34.855066'),(18,'auth','0006_require_contenttypes_0002','2016-07-26 19:21:34.858858'),(19,'instructor_task','0001_initial','2016-07-26 19:21:34.905433'),(20,'certificates','0001_initial','2016-07-26 19:21:35.435608'),(21,'certificates','0002_data__certificatehtmlviewconfiguration_data','2016-07-26 19:21:35.455242'),(22,'certificates','0003_data__default_modes','2016-07-26 19:21:35.472995'),(23,'certificates','0004_certificategenerationhistory','2016-07-26 19:21:35.547210'),(24,'certificates','0005_auto_20151208_0801','2016-07-26 19:21:35.623957'),(25,'certificates','0006_certificatetemplateasset_asset_slug','2016-07-26 19:21:35.644037'),(26,'certificates','0007_certificateinvalidation','2016-07-26 19:21:35.740150'),(27,'badges','0001_initial','2016-07-26 19:21:35.977520'),(28,'badges','0002_data__migrate_assertions','2016-07-26 19:21:36.004921'),(29,'badges','0003_schema__add_event_configuration','2016-07-26 19:21:36.214821'),(30,'bookmarks','0001_initial','2016-07-26 19:21:36.529527'),(31,'branding','0001_initial','2016-07-26 19:21:36.766984'),(32,'course_groups','0001_initial','2016-07-26 19:21:37.765416'),(33,'bulk_email','0001_initial','2016-07-26 19:21:38.135758'),(34,'bulk_email','0002_data__load_course_email_template','2016-07-26 19:21:38.159447'),(35,'bulk_email','0003_config_model_feature_flag','2016-07-26 19:21:38.270161'),(36,'bulk_email','0004_add_email_targets','2016-07-26 19:21:38.709599'),(37,'bulk_email','0005_move_target_data','2016-07-26 19:21:38.730953'),(38,'catalog','0001_initial','2016-07-26 19:21:38.890302'),(39,'verified_track_content','0001_initial','2016-07-26 19:21:38.917447'),(40,'course_overviews','0001_initial','2016-07-26 19:21:38.975738'),(41,'course_overviews','0002_add_course_catalog_fields','2016-07-26 19:21:39.125360'),(42,'course_overviews','0003_courseoverviewgeneratedhistory','2016-07-26 19:21:39.151487'),(43,'course_overviews','0004_courseoverview_org','2016-07-26 19:21:39.187260'),(44,'course_overviews','0005_delete_courseoverviewgeneratedhistory','2016-07-26 19:21:39.209991'),(45,'course_overviews','0006_courseoverviewimageset','2016-07-26 19:21:39.248775'),(46,'course_overviews','0007_courseoverviewimageconfig','2016-07-26 19:21:39.422772'),(47,'course_overviews','0008_remove_courseoverview_facebook_url','2016-07-26 19:21:39.428033'),(48,'course_overviews','0009_readd_facebook_url','2016-07-26 19:21:39.476115'),(49,'course_overviews','0010_auto_20160329_2317','2016-07-26 19:21:39.547647'),(50,'ccx','0001_initial','2016-07-26 19:21:40.040911'),(51,'ccx','0002_customcourseforedx_structure_json','2016-07-26 19:21:40.202360'),(52,'ccx','0003_add_master_course_staff_in_ccx','2016-07-26 19:21:40.225528'),(53,'ccxcon','0001_initial_ccxcon_model','2016-07-26 19:21:40.253875'),(54,'ccxcon','0002_auto_20160325_0407','2016-07-26 19:21:40.279359'),(55,'certificates','0008_schema__remove_badges','2016-07-26 19:21:40.673571'),(56,'commerce','0001_data__add_ecommerce_service_user','2016-07-26 19:21:40.701499'),(57,'commerce','0002_commerceconfiguration','2016-07-26 19:21:40.841848'),(58,'commerce','0003_auto_20160329_0709','2016-07-26 19:21:40.997534'),(59,'commerce','0004_auto_20160531_0950','2016-07-26 19:21:41.315004'),(60,'contentserver','0001_initial','2016-07-26 19:21:41.467849'),(61,'contentserver','0002_cdnuseragentsconfig','2016-07-26 19:21:41.631163'),(62,'cors_csrf','0001_initial','2016-07-26 19:21:41.783914'),(63,'course_action_state','0001_initial','2016-07-26 19:21:42.116801'),(64,'course_modes','0001_initial','2016-07-26 19:21:42.189509'),(65,'course_modes','0002_coursemode_expiration_datetime_is_explicit','2016-07-26 19:21:42.218816'),(66,'course_modes','0003_auto_20151113_1443','2016-07-26 19:21:42.243280'),(67,'course_modes','0004_auto_20151113_1457','2016-07-26 19:21:42.405329'),(68,'course_modes','0005_auto_20151217_0958','2016-07-26 19:21:42.439703'),(69,'course_modes','0006_auto_20160208_1407','2016-07-26 19:21:42.611065'),(70,'course_modes','0007_coursemode_bulk_sku','2016-07-26 19:21:42.640224'),(71,'course_structures','0001_initial','2016-07-26 19:21:42.667841'),(72,'coursetalk','0001_initial','2016-07-26 19:21:42.860674'),(73,'coursetalk','0002_auto_20160325_0631','2016-07-26 19:21:43.027808'),(74,'courseware','0001_initial','2016-07-26 19:21:45.549484'),(75,'coursewarehistoryextended','0001_initial','2016-07-26 19:21:45.933687'),(76,'coursewarehistoryextended','0002_force_studentmodule_index','2016-07-26 19:21:46.294042'),(77,'credentials','0001_initial','2016-07-26 19:21:46.627739'),(78,'credentials','0002_auto_20160325_0631','2016-07-26 19:21:46.963720'),(79,'credit','0001_initial','2016-07-26 19:21:51.766493'),(80,'credit','0002_creditconfig','2016-07-26 19:21:52.024419'),(81,'credit','0003_auto_20160511_2227','2016-07-26 19:21:52.284392'),(82,'dark_lang','0001_initial','2016-07-26 19:21:52.563908'),(83,'dark_lang','0002_data__enable_on_install','2016-07-26 19:21:52.593944'),(84,'default','0001_initial','2016-07-26 19:21:53.216370'),(85,'default','0002_add_related_name','2016-07-26 19:21:53.427736'),(86,'default','0003_alter_email_max_length','2016-07-26 19:21:53.465612'),(87,'django_comment_common','0001_initial','2016-07-26 19:21:54.031711'),(88,'django_comment_common','0002_forumsconfig','2016-07-26 19:21:54.295470'),(89,'django_notify','0001_initial','2016-07-26 19:21:55.560873'),(90,'django_openid_auth','0001_initial','2016-07-26 19:21:55.979668'),(91,'oauth2','0001_initial','2016-07-26 19:21:57.749535'),(92,'edx_oauth2_provider','0001_initial','2016-07-26 19:21:58.196224'),(93,'edx_proctoring','0001_initial','2016-07-26 19:22:05.460116'),(94,'edx_proctoring','0002_proctoredexamstudentattempt_is_status_acknowledged','2016-07-26 19:22:06.050166'),(95,'edx_proctoring','0003_auto_20160101_0525','2016-07-26 19:22:07.291172'),(96,'edx_proctoring','0004_auto_20160201_0523','2016-07-26 19:22:07.880489'),(97,'edx_proctoring','0005_proctoredexam_hide_after_due','2016-07-26 19:22:08.487275'),(98,'edxval','0001_initial','2016-07-26 19:22:08.954661'),(99,'edxval','0002_data__default_profiles','2016-07-26 19:22:08.993050'),(100,'email_marketing','0001_initial','2016-07-26 19:22:09.655640'),(101,'email_marketing','0002_auto_20160623_1656','2016-07-26 19:22:14.843673'),(102,'email_marketing','0003_auto_20160715_1145','2016-07-26 19:22:17.312365'),(103,'embargo','0001_initial','2016-07-26 19:22:18.825105'),(104,'embargo','0002_data__add_countries','2016-07-26 19:22:19.137490'),(105,'external_auth','0001_initial','2016-07-26 19:22:20.321624'),(106,'lms_xblock','0001_initial','2016-07-26 19:22:20.910478'),(107,'microsite_configuration','0001_initial','2016-07-26 19:22:26.646668'),(108,'microsite_configuration','0002_auto_20160202_0228','2016-07-26 19:22:28.064889'),(109,'milestones','0001_initial','2016-07-26 19:22:28.801361'),(110,'milestones','0002_data__seed_relationship_types','2016-07-26 19:22:28.839305'),(111,'milestones','0003_coursecontentmilestone_requirements','2016-07-26 19:22:28.915355'),(112,'milestones','0004_auto_20151221_1445','2016-07-26 19:22:29.222765'),(113,'mobile_api','0001_initial','2016-07-26 19:22:31.733868'),(114,'mobile_api','0002_auto_20160406_0904','2016-07-26 19:22:31.817574'),(115,'notes','0001_initial','2016-07-26 19:22:32.275312'),(116,'oauth2','0002_auto_20160404_0813','2016-07-26 19:22:33.712598'),(117,'oauth2','0003_client_logout_uri','2016-07-26 19:22:34.231452'),(118,'oauth2_provider','0001_initial','2016-07-26 19:22:36.463510'),(119,'oauth2_provider','0002_08_updates','2016-07-26 19:22:38.938479'),(120,'oauth_provider','0001_initial','2016-07-26 19:22:40.746642'),(121,'organizations','0001_initial','2016-07-26 19:22:40.915149'),(122,'programs','0001_initial','2016-07-26 19:22:41.801114'),(123,'programs','0002_programsapiconfig_cache_ttl','2016-07-26 19:22:42.731302'),(124,'programs','0003_auto_20151120_1613','2016-07-26 19:22:46.549188'),(125,'programs','0004_programsapiconfig_enable_certification','2016-07-26 19:22:47.485223'),(126,'programs','0005_programsapiconfig_max_retries','2016-07-26 19:22:48.377201'),(127,'programs','0006_programsapiconfig_xseries_ad_enabled','2016-07-26 19:22:49.131675'),(128,'programs','0007_programsapiconfig_program_listing_enabled','2016-07-26 19:22:49.934689'),(129,'programs','0008_programsapiconfig_program_details_enabled','2016-07-26 19:22:50.740052'),(130,'redirects','0001_initial','2016-07-26 19:22:51.563486'),(131,'rss_proxy','0001_initial','2016-07-26 19:22:51.613244'),(132,'self_paced','0001_initial','2016-07-26 19:22:52.458436'),(133,'sessions','0001_initial','2016-07-26 19:22:52.504633'),(134,'student','0001_initial','2016-07-26 19:23:14.117622'),(135,'shoppingcart','0001_initial','2016-07-26 19:23:34.054096'),(136,'shoppingcart','0002_auto_20151208_1034','2016-07-26 19:23:36.390178'),(137,'shoppingcart','0003_auto_20151217_0958','2016-07-26 19:23:38.561132'),(138,'site_configuration','0001_initial','2016-07-26 19:23:40.818637'),(139,'splash','0001_initial','2016-07-26 19:23:41.950298'),(140,'static_replace','0001_initial','2016-07-26 19:23:43.111611'),(141,'static_replace','0002_assetexcludedextensionsconfig','2016-07-26 19:23:44.343755'),(142,'status','0001_initial','2016-07-26 19:23:47.074619'),(143,'student','0002_auto_20151208_1034','2016-07-26 19:23:51.277658'),(144,'student','0003_auto_20160516_0938','2016-07-26 19:23:52.671235'),(145,'student','0004_auto_20160531_1422','2016-07-26 19:23:53.414666'),(146,'student','0005_auto_20160531_1653','2016-07-26 19:23:54.139663'),(147,'student','0006_logoutviewconfiguration','2016-07-26 19:23:54.848377'),(148,'submissions','0001_initial','2016-07-26 19:23:55.353310'),(149,'submissions','0002_auto_20151119_0913','2016-07-26 19:23:55.507500'),(150,'submissions','0003_submission_status','2016-07-26 19:23:55.580640'),(151,'survey','0001_initial','2016-07-26 19:23:56.529727'),(152,'teams','0001_initial','2016-07-26 19:23:59.334667'),(153,'theming','0001_initial','2016-07-26 19:24:00.352830'),(154,'third_party_auth','0001_initial','2016-07-26 19:24:05.980284'),(155,'third_party_auth','0002_schema__provider_icon_image','2016-07-26 19:24:14.417280'),(156,'track','0001_initial','2016-07-26 19:24:14.481414'),(157,'user_api','0001_initial','2016-07-26 19:24:21.442916'),(158,'util','0001_initial','2016-07-26 19:24:22.613536'),(159,'util','0002_data__default_rate_limit_config','2016-07-26 19:24:22.664453'),(160,'verified_track_content','0002_verifiedtrackcohortedcourse_verified_cohort_name','2016-07-26 19:24:22.717630'),(161,'verify_student','0001_initial','2016-07-26 19:24:37.352384'),(162,'verify_student','0002_auto_20151124_1024','2016-07-26 19:24:39.010498'),(163,'verify_student','0003_auto_20151113_1443','2016-07-26 19:24:40.625535'),(164,'wiki','0001_initial','2016-07-26 19:25:15.999984'),(165,'wiki','0002_remove_article_subscription','2016-07-26 19:25:16.061976'),(166,'wiki','0003_ip_address_conv','2016-07-26 19:25:19.988884'),(167,'workflow','0001_initial','2016-07-26 19:25:20.231308'),(168,'xblock_django','0001_initial','2016-07-26 19:25:21.787942'),(169,'xblock_django','0002_auto_20160204_0809','2016-07-26 19:25:23.123783'),(170,'xblock_django','0003_add_new_config_models','2016-07-26 19:25:27.659597'),(171,'xblock_django','0004_delete_xblock_disable_config','2016-07-26 19:25:29.374255'),(172,'contentstore','0001_initial','2016-07-26 19:26:07.462663'),(173,'course_creators','0001_initial','2016-07-26 19:26:07.516190'),(174,'tagging','0001_initial','2016-07-26 19:26:07.609519'),(175,'xblock_config','0001_initial','2016-07-26 19:26:07.998072');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-26 19:26:13
