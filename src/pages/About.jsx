import React from 'react';
import '../styles/About.css'; // Create and import CSS as needed
import avatar from '../assets/avatar.jpg'; // Replace with your image path

function About() {
  return (
    <section className="about">
      <img src={avatar} alt="Developer Avatar" className="avatar" />
      <div className="bio">
        <h2>About Me</h2>
        <p>
          {/* Your short bio here */}
          Hi! I'm [Your Name], a passionate web developer specializing in building exceptional digital experiences. With a strong foundation in React and modern web technologies, I strive to create responsive, user-friendly applications.
        </p>
      </div>
    </section>
  );
}

export default About;
