import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tr from-gray-700 via-gray-900 to-black p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-8">Resume</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <p className="text-lg leading-relaxed">
            Software Developer - ABC Corp (2020 - Present)
          </p>
          <ul className="list-disc list-inside">
            <li>Developed key features for high-traffic web applications.</li>
            <li>Worked in a team environment with agile methodologies.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Education</h3>
          <p className="text-lg leading-relaxed">
            B.S. in Computer Science - University XYZ (2016 - 2020)
          </p>
          <ul className="list-disc list-inside">
            <li>Graduated with Honors, GPA: 3.8/4.0</li>
            <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <ul className="list-disc list-inside">
            <li>Programming Languages: JavaScript, Python, C++</li>
            <li>Web Technologies: React, Node.js, HTML/CSS</li>
            <li>Tools: Git, Docker, AWS</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Resume;
