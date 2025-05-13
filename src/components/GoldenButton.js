import React from 'react';

const GoldenButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-yellow-600 text-gray-900 py-3 rounded-lg hover:bg-yellow-700 transition-colors text-lg font-semibold shadow-lg transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default GoldenButton;