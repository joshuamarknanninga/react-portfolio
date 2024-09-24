import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css'; // Create and import CSS as needed

function Footer() {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a href="https://github.com/joshuamarknanninga" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joshua-nanninga-88a7522a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@joshuananninga8394" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
        </li>
        {/* Add a third platform if needed, e.g., Stack Overflow */}
      </ul>
      <p>&copy; {new Date().getFullYear()} Joshua Mark Nanninga</p>
    </footer>
  );
}

export default Footer;
