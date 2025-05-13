import React from 'react';

const ElegantButton = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-colors text-lg font-semibold shadow-md transform hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ElegantButton;