// src/App.jsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

// Lazy-loaded components for code splitting
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Suspense for lazy-loaded components with a fallback loader */}
        <Suspense fallback={<div className="loader">Loading...</div>}>
          {/* AnimatePresence for page transition animations */}
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
