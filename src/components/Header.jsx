import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg"
    >
      <h1 className="text-3xl font-bold text-center text-white">
        My Portfolio
      </h1>
    </motion.header>
  );
}

export default Header;
