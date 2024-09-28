import React from 'react';
import Project from '../components/Project';
// src/pages/Portfolio.jsx
import PixelArtGenerator from "../components/PixelArtGenerator";

import '../styles/Portfolio.css'; // Create and import CSS as needed

// Sample project data; replace your own projects
const projects = [
  {
    title: 'aphex-twin-music-generator-pro',
    // image: '/assets/project1.png',
    deployedLink: 'https://joshuamarknanninga.github.io/aphex-twin-music-generator-pro/',
    repoLink: 'https://github.com/joshuamarknanninga/aphex-twin-music-generator-pro',
  },
  {
    title: 'restfull-api',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/restfull-api/',
    repoLink: 'https://github.com/joshuamarknanninga/restfull-api',
  },
  {
    title: 'ethical-hacking-tool',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/ethical-hacking-tool/',
    repoLink: 'https://github.com/joshuamarknanninga/ethical-hacking-tool',
  },
  {
    title: 'diabetes-nutrition-app',
   // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/diabetes-nutrition-app/',
    repoLink: 'https://github.com/joshuamarknanninga/diabetes-nutrition-app',
  },
  {
    title: 'foodbank-database-pro',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/foodbank-database-pro/',
    repoLink: 'https://github.com/joshuamarknanninga/foodbank-database-pro',
  },
  {
    title: 'haunted-object-database',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/haunted-object-database/',
    repoLink: 'https://github.com/joshuamarknanninga/haunted-object-database',
  },
  {
    title: 'audio-markdown',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/audio-markdown/',
    repoLink: 'https://github.com/joshuamarknanninga/diabetes-nutrition-app',
  },
  {
    title: 'scrolling-wolfenstein3d-clone',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/scrolling-wolfenstein3d-clone/',
    repoLink: 'https://github.com/joshuamarknanninga/scrolling-wolfenstein3d-clone',
  },
  {
    title: 'job-search-website',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/job-search-website/',
    repoLink: 'https://github.com/joshuamarknanninga/job-search-website',
  },
  {
    title: 'trippy-visual-dj',
   // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/trippy-visual-dj/',
    repoLink: 'https://github.com/joshuamarknanninga/trippy-visual-dj',
  },
  {
    title: 'burbz',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/burbz/',
    repoLink: 'https://github.com/joshuamarknanninga/burbz',
  },
  {
    title: 'chatbot-1',
    // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/chatbot-1/',
    repoLink: 'https://github.com/joshuamarknanninga/chatbot-1',
  },
  {
    title: 'Matrix-Opening',
   // image: '/assets/project2.png',
    deployedLink: 'https://joshuamarknanninga.github.io/Matrix-Opening/',
    repoLink: 'https://github.com/joshuamarknanninga/Matrix-Opening',
  },
  // Add more projects up to six
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <PixelArtGenerator />
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <Project
            key={index}
            title={proj.title}
            image={proj.image}
            deployedLink={proj.deployedLink}
            repoLink={proj.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
