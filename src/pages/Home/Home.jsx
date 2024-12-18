// src/pages/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
import BackgroundVideo from '@/components/common/BackgroundVideo';
import Button from '@/components/common/Button';
import './Home.css';
import sampleVideo from '@/assets/videos/sample.mp4'; // Ensure this video exists in the specified path

const Home = () => {
  return (
    <BackgroundVideo videoSrc={sampleVideo}>
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Joshua Mark Nanninga, a Front-End Developer</p>
        <Button href="#projects" variant="primary">
          View My Work
        </Button>
      </motion.div>
    </BackgroundVideo>
  );
};

export default Home;
