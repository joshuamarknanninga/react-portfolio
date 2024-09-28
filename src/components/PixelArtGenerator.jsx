// src/components/PixelArtGenerator.jsx

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/PixelArtGenerator.css'; // Import the corresponding CSS

const PixelArtGenerator = ({ theme, animationSpeed }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const colors = theme; // Array of color strings

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Function to set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();

    // Debounced resize handler to optimize performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        cols = Math.floor(canvas.width / pixelSize);
        rows = Math.floor(canvas.height / pixelSize);
        grid = [];
        for (let x = 0; x < cols; x++) {
          grid[x] = [];
          for (let y = 0; y < rows; y++) {
            grid[x][y] = colors[Math.floor(Math.random() * colors.length)];
          }
        }
        drawGrid();
      }, 800);
    };

    window.addEventListener('resize', handleResize);

    const pixelSize = 1; // Size of each pixel
    let cols = Math.floor(canvas.width / pixelSize);
    let rows = Math.floor(canvas.height / pixelSize);

    // Initialize grid with random colors from the theme
    let grid = [];
    for (let x = 0; x < cols; x++) {
      grid[x] = [];
      for (let y = 0; y < rows; y++) {
        grid[x][y] = colors[Math.floor(Math.random() * colors.length)];
      }
    }

    // Function to draw the grid
    const drawGrid = () => {
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          ctx.fillStyle = grid[x][y];
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }
    };

    // Function to update the grid based on animation speed
    const updateGrid = () => {
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          if (Math.random() < 0.05 * (animationSpeed / 5)) { // Adjust change probability
            grid[x][y] = colors[Math.floor(Math.random() * colors.length)];
          }
        }
      }
    };

    let frameCount = 0;

    // Animation loop
    const animate = () => {
      frameCount++;
      if (frameCount % Math.max(1, Math.floor(60 / (animationSpeed * 5))) === 0) { // Control animation speed
        updateGrid();
        drawGrid();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    drawGrid();
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [colors, animationSpeed]);

  return <canvas ref={canvasRef} className="pixel-art-canvas" />;
};

PixelArtGenerator.propTypes = {
  theme: PropTypes.arrayOf(PropTypes.string).isRequired,
  animationSpeed: PropTypes.number.isRequired,
};

export default PixelArtGenerator;
