import React from 'react';
import '../styles/Resume.css'; // Create and import CSS as needed
import resumePDF from '../assets/resume.pdf'; // Replace with your resume path

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href={resumePDF} download>
        Download Resume
      </a>
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
   