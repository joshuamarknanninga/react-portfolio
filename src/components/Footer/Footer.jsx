// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex-between">
        <p>&copy; {new Date().getFullYear()} Joshua Mark Nanninga. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/joshuamarknanninga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
              <path d="M9 19c-4.418 0-8-3.582-8-8 0-3.537 2.292-6.536 5.468-7.59.4-.07.547.172.547.385 0 .19-.007.693-.01 1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.168-.89-1.168-.727-.497.055-.487.055-.487.803.057 1.226.825 1.226.825.714 1.223 1.872.87 2.329.665.072-.517.28-.87.508-1.07-1.777-.202-3.644-.888-3.644-3.952 0-.873.312-1.588.823-2.15-.083-.202-.357-1.017.078-2.12 0 0 .672-.215 2.2.82a7.68 7.68 0 012.003-.27c.68.003 1.36.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.103.162 1.918.08 2.12.513.562.823 1.277.823 2.15 0 3.073-1.87 3.748-3.653 3.947.287.247.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.146.459.55.38A8.013 8.013 0 009 19z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/joshuamarknanninga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
