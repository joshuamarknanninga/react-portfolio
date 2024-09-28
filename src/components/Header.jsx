// src/components/Header.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Your Name</h1>
      <Navigation />
    </motion.header>
  );
  
}

export default Header;

