// src/components/Projects/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Sample Projects Data
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project showcases my ability to build responsive and interactive web applications using React.',
    image: '/assets/images/project1.png', // Replace with your project image path
    link: 'https://github.com/joshuamarknanninga/project-one', // Replace with your project link
    demo: 'https://joshuamarknanninga.github.io/project-one', // Optional: Link to live demo
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project demonstrates my proficiency in integrating APIs and managing state effectively.',
    image: '/assets/images/project2.png',
    link: 'https://github.com/joshuamarknanninga/project-two',
    demo: 'https://joshuamarknanninga.github.io/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on recently.</p>
        </motion.div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
