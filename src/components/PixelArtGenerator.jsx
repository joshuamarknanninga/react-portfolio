// src/components/PixelArtGenerator.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/PixelArtGenerator.css'; // Create and import CSS as needed

const PixelArtGenerator = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const generatePixels = () => {
      for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < height; y += 10) {
          ctx.fillStyle = `rgba(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                1)`;
          ctx.fillRect(x, y, 10, 10);
        }
      }
    };

    generatePixels();
  }, []);

  return (
    <div className="pixel-art-generator">
      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
};

export default PixelArtGenerator;
