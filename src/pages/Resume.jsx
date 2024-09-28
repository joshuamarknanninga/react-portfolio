import React, { useState } from 'react';
import '../styles/Resume.css'; // Create and import CSS as needed
import resumePDF from '../assets/resume.pdf'; // Replace with your resume path
import PixelArtGenerator from '../components/PixelArtGenerator';

function Resume() {
  const [animationSpeed, setAnimationSpeed] = useState(5); // Default speed
  const theme = ['#1ABC9C', '#E67E22', '#9B59B6', '#34495E']; // Example theme for Resume

  const handleSliderChange = (e) => {
    setAnimationSpeed(Number(e.target.value));
  };

  return (
    <section className="resume">
      <PixelArtGenerator theme={theme} animationSpeed={animationSpeed} />
      <h2>Resume</h2>
      <a href={resumePDF} download>
        Download Resume
      </a>
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
      <h3>Proficiencies</h3>
      <ul className="proficiencies">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
        <li>SQL</li>
        <li>MySQL</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>AJAX</li>
        <li>SASS</li>
        <li>Vue.js</li>
        <li>NPM</li>
        <li>Mocha</li>
        <li>Chrome Dev Tools</li>
        <li>Tailwind</li>
        <li>Bulma</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Handlebars</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Webpack</li>
        <li>Gulp</li>
        <li>Python</li>
        <li>OAuth</li>
        <li>Jest</li>
        <li>GCP</li>
        <li>Heroku</li>
        <li>Insomnia</li>
        <li>Web Audio API</li>
        <li>MediaRecorder API</li>
        <li>BroadcastChannel API</li>
        <li>WebGL</li>
        <li>Three.js</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}


export default Resume;
