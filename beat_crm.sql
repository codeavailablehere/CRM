-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2023 at 06:15 AM
-- Server version: 5.7.40-log
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beat_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `companys`
--

CREATE TABLE `companys` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companys`
--

INSERT INTO `companys` (`id`, `user_name`, `user_email`, `password`) VALUES
(1, 'aryan', 'aryan@gmail.com', '123456789');

-- --------------------------------------------------------

--
-- Table structure for table `lead`
--

CREATE TABLE `lead` (
  `id` int(11) NOT NULL,
  `p_mobile` int(10) NOT NULL,
  `s_mobile` int(10) NOT NULL,
  `a_mobile` int(10) NOT NULL,
  `w_mobile` int(10) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zip_code` int(255) NOT NULL,
  `emp_type` varchar(255) NOT NULL,
  `income` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `lead_source` varchar(255) NOT NULL,
  `lead_sub_source` varchar(255) NOT NULL,
  `lead_cam_id` varchar(255) NOT NULL,
  `lead_cam_name` varchar(255) NOT NULL,
  `lead_status` varchar(255) NOT NULL,
  `lead_assign` varchar(255) NOT NULL,
  `property_type` varchar(255) NOT NULL,
  `looking_for` varchar(255) NOT NULL,
  `builder_name` varchar(255) NOT NULL,
  `poject_name` varchar(255) NOT NULL,
  `timeline` varchar(255) NOT NULL,
  `note` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lead`
--

INSERT INTO `lead` (`id`, `p_mobile`, `s_mobile`, `a_mobile`, `w_mobile`, `first_name`, `last_name`, `email`, `dob`, `address`, `city`, `country`, `zip_code`, `emp_type`, `income`, `designation`, `company_name`, `lead_source`, `lead_sub_source`, `lead_cam_id`, `lead_cam_name`, `lead_status`, `lead_assign`, `property_type`, `looking_for`, `builder_name`, `poject_name`, `timeline`, `note`) VALUES
(1, 555, 555, 555, 555, 'Karan', 'Marhotra', 'karan@gmail.com', '2008-11-11', ' Delhi NCR', 'Noida', 'India', 201203, 'Regular', '10LPA', 'Developer', 'TCS', 'Online', 'Linkdin', 'AAY55A', 'Reals state', 'Pendding', 'Done', 'Flat', 'Rent', 'pawan', 'Agara', '100Day', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has m');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mobile` int(100) NOT NULL,
  `c_mobile` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `experience` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `adhar_no` int(100) NOT NULL,
  `pan_no` varchar(200) NOT NULL,
  `department` varchar(200) NOT NULL,
  `designation` varchar(200) NOT NULL,
  `r_manager` varchar(200) NOT NULL,
  `nationality` varchar(200) NOT NULL,
  `language` varchar(200) NOT NULL,
  `role` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `user_name`, `first_name`, `last_name`, `mobile`, `c_mobile`, `email`, `gender`, `dob`, `experience`, `address`, `city`, `state`, `country`, `adhar_no`, `pan_no`, `department`, `designation`, `r_manager`, `nationality`, `language`, `role`) VALUES
(1, 'first user', 'john ', 'johnny', 5555522, 5555121, 'bhb@bh.ckk', 'female', '2023-02-17', '10', 'house 89,bhbdq,hbhasd', '', '20', '20', 55465454, 'jnsad44', 'IT', 'Sales Head', 'Toushar Bhalla', 'Indian', 'Tamil', 'Yes'),
(2, 'Aryan_sharma', 'Aryan', 'Sharma', 987456324, 123651545, 'aryan@gmai.com', 'male', '1993-12-17', '7', 'd2, Delhi, 110064', '', '20', '10', 654789321, 'KAA5555ALL', 'IT', 'Business Head', 'Toushar Bhalla', 'Indian', 'Panjabi', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `user_count` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `gst_no` varchar(255) NOT NULL,
  `apartment` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `zip` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_type`, `brand_name`, `user_count`, `user_name`, `email`, `password`, `company_name`, `gst_no`, `apartment`, `address`, `city`, `state`, `country`, `zip`, `status`) VALUES
(1, '', 'Jio', 500000, 'Akash', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', '', 'india', 2568166, 1),
(2, '', 'Jio', 500000, 'Akash', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', '', 'india', 2568166, 1),
(3, '', 'Jio', 500000, 'Akash', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', '', 'india', 2568166, 1),
(4, '', 'Jio', 500000, 'Akash', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', '', 'india', 2568166, 1),
(5, '', 'Jio', 500000, 'Akash', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', '', 'india', 2568166, 1),
(6, '', 'Jio', 500000, 'gvvj', 'akash@gmail.com', '123456789', 'relince', 'gahs555djasbd', '52b', 'Delhi', 'Delhi', 'up', 'india', 2568166, 1),
(7, '', 'jbdABD', 555, 'dAHD', 'pk222170@gmail.com', '54545', 'vgHS', 'cFASAs', 'gchAHCSA', 'Pittoopur, Muftiganj, Jaunpur, Uttar Pradesh', 'JAUNPUR', '', 'CCasA', 222170, 1),
(8, '', 'Aryan', 5000, 'gsc', 'qcgs@gms.cjbj', '455544', 'vvcsv', 'hqsdqsvdj', 'sdsvdvs', 'hsvcvs', 'hsvdvsa', '', 'gagcas', 15421, 1),
(11, 'System Admin', '', 255, 'Aryan', 'aryan@gmail.com', '123456', '', '', '', '', '', '', '', 22255, 1),
(12, 'Master Admin', '', 2222, 'Pradeep', 'pradeep@gmail.com', '123456', '', '', '', '', '', '', '', 2222, 1),
(13, 'Client Admin', '', 2222, 'Monu', 'monu@gmail.com', '123456', 'Relience', 'abscs6vav', 'D2632', 'CP', 'Delhi', 'Delhi', 'India', 110075, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companys`
--
ALTER TABLE `companys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lead`
--
ALTER TABLE `lead`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companys`
--
ALTER TABLE `companys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `lead`
--
ALTER TABLE `lead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
