import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-purple-700 to-pink-500 p-4 mt-4 shadow-inner"
    >
      <p className="text-center text-white text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
