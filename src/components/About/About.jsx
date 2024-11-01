// src/components/About/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hello! I'm Joshua Mark Nanninga, a passionate front-end developer specializing in React.js, CSS3, and modern JavaScript frameworks. I thrive on creating visually stunning and responsive web applications that provide excellent user experiences. With a keen eye for design and a strong foundation in coding, I bring ideas to life through clean, efficient, and scalable code.
          </p>
          <p>
            My journey in web development started with a curiosity for how websites are built and has since evolved into a dedication to mastering the art of front-end engineering. I enjoy collaborating with designers and back-end developers to build seamless and dynamic applications. When I'm not coding, I love exploring the latest web technologies, contributing to open-source projects, and continuously honing my skills.
          </p>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
