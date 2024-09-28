import React from 'react';
import '../styles/About.css'; // Create and import CSS as needed
import avatar from '../assets/avatar.jpg'; // Replace with your image path
import PixelArtGenerator from '../components/PixelArtGenerator';


function About() {
  return (
    <section className="about">
      <img src={avatar} alt="Developer Avatar" className="avatar" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
          {/* Your short bio here */}
          Hi! I'm Joshua Mark Nanninga, a passionate web developer specializing in building exceptional digital experiences. With a strong foundation in React and modern web technologies, I strive to create responsive, user-friendly applications.
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
        </p>
      </div>
    </section>
  );
}

export default About;
