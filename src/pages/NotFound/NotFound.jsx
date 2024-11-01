// src/pages/NotFound.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Player } from '@lottiefiles/react-lottie-player';
import clickSound from '@/assets/audio/click-sound.wav'; // Ensure correct path
import animationData from '@/assets/lottie/404-animation.json'; // Ensure correct path
import './NotFound.css';

const NotFound = () => {
  // Initialize tsparticles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Particle configuration
  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  // Handle button click to play sound
  const handleButtonClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div className="notfound-wrapper">
      {/* Animated Gradient Background */}
      <div className="animated-gradient"></div>

      {/* Particle Background */}
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

      {/* Lottie Animation */}
      <div className="lottie-container">
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: '300px', width: '300px' }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="notfound-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          404
        </motion.h1>
        <motion.p
          className="notfound-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          className="notfound-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/" className="home-button" onClick={handleButtonClick} aria-label="Go Back Home">
            <FiArrowLeftCircle className="home-icon" />
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
