// src/components/Project.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Project.css'; // Ensure CSS is correctly imported

function Project({ title, description, image, links }) {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
      {links.map((link, index) => {
const linkType = link.includes('github.com') ? 'Live Deploy' : 'GitHub Repository';
  return (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      {linkType}
    </a>
  );
})}
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired, // Assuming image is a string URL
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Project;
