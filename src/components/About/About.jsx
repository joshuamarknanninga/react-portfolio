import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed">
        I am a passionate developer with a knack for creating stunning, interactive web experiences. 
        My journey into the world of coding started with a simple interest in technology, which quickly grew into a lifelong passion.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        My expertise spans various technologies, and I'm always eager to learn and adapt to new tools and frameworks 
        to enhance my skillset and deliver exceptional results.
      </p>
    </motion.section>
  );
}

export default About;

