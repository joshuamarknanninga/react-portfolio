import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css'; // Create and import CSS as needed

// Sample project data; replace with your own projects
const projects = [
  {
    title: 'Project One',
    image: '/assets/project1.png',
    deployedLink: 'https://your-deployed-app1.com',
    repoLink: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    image: '/assets/project2.png',
    deployedLink: 'https://your-deployed-app2.com',
    repoLink: 'https://github.com/yourusername/project-two',
  },
  // Add more projects up to six
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
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
