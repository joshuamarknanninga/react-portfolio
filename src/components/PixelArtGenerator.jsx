import React, { useState } from 'react';
import { motion } from 'framer-motion';

function PixelArtGenerator() {
  const [grid, setGrid] = useState(Array(16).fill(Array(16).fill('#ffffff')));
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((color, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? selectedColor : color))
    );
    setGrid(newGrid);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Pixel Art Generator</h2>

      <div className="flex justify-center mb-4">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-16 h-16 border-4 border-gray-600 rounded-full"
        />
      </div>

      <div className="grid grid-cols-16 gap-1 mx-auto max-w-xl">
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className="w-8 h-8"
              style={{ backgroundColor: color }}
            ></div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default PixelArtGenerator;
