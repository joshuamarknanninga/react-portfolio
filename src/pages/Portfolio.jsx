import React from 'react';
import { motion } from 'framer-motion';
import Project from '../components/Project';

function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-tl from-teal-400 via-blue-600 to-indigo-800 p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example project components, can be dynamically mapped from a list */}
        <Project title="Project 1" description="An amazing project that does wonderful things." />
        <Project title="Project 2" description="A second project with fantastic features." />
        <Project title="Project 3" description="A third project that's innovative and unique." />
      </div>
    </motion.section>
  );
}

export default Portfolio;
