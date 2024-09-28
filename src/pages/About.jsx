import React, { useState } from 'react';
import '../styles/About.css'; // Create and import CSS as needed
import avatar from '../assets/avatar.jpg'; // Replace with your image path
import PixelArtGenerator from '../components/PixelArtGenerator';

const aboutTheme = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'];

function About() {
  const [animationSpeed, setAnimationSpeed] = useState(5); // Default speed
  const theme = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F']; // Example theme for About

  const handleSliderChange = (e) => {
    setAnimationSpeed(Number(e.target.value));
  };

  return (
    <section className="about">
      <PixelArtGenerator theme={theme} animationSpeed={animationSpeed} />
      <div className="about-container">
        <img src={avatar} alt="Developer Avatar" className="avatar" />
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Hi! I'm Joshua Mark Nanninga, a passionate web developer specializing in building exceptional digital experiences. With a strong foundation in React and modern web technologies, I strive to create responsive, user-friendly applications.
          </p>
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
        </div>
      </div>
    </section>
  );
}

export default About;
