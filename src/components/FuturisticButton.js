import React from 'react';

const FuturisticButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default FuturisticButton;