import React, { useState } from 'react';
import '../styles/Portfolio.css';
import Project from '../components/Project';
import PixelArtGenerator from '../components/PixelArtGenerator';


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
];

function Portfolio() {
  const [animationSpeed, setAnimationSpeed] = useState(5); // Default speed

  const handleSliderChange = (e) => {
    setAnimationSpeed(Number(e.target.value));
  };

  // Define the theme array
  const theme = ['#1ABC9C', '#E67E22', '#9B59B6', '#34495E'];
  return (
    <section className="portfolio">
      {/* Pass both theme and animationSpeed props */}
      <PixelArtGenerator theme={theme} animationSpeed={animationSpeed} />
      <h2>My Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            // image={project.image}
            links={project.links}
          />
        ))}
      </div>
      <div className="slider-container">
        <label htmlFor="speed-slider">Animation Speed:</label>
        <input
          type="range"
          id="speed-slider"
          min="1"
          max="10"
          value={animationSpeed}
          onChange={handleSliderChange}
        />
      </div>
    </section>
  );
}

export default Portfolio;
