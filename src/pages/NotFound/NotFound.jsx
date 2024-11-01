// src/pages/NotFound.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import './NotFound.css';

const NotFound = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="notfound-wrapper">
      {/* Animated Gradient Background */}
      <div className="animated-gradient"></div>

      {/* Particle Background */}
      <canvas id="particles-js"></canvas>

      {/* Main Content */}
      <motion.div
        className="notfound-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="notfound-title" variants={itemVariants}>
          404
        </motion.h1>
        <motion.p className="notfound-message" variants={itemVariants}>
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div className="notfound-actions" variants={itemVariants}>
          <Link to="/" className="home-button">
            <FiArrowLeftCircle className="home-icon" />
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
