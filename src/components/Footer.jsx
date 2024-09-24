import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css'; // Create and import CSS as needed

function Footer() {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </li>
        {/* Add a third platform if needed, e.g., Stack Overflow */}
      </ul>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

export default Footer;
