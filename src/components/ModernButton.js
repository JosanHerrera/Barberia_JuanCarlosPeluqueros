import React from 'react';

const ModernButton = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md transform hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ModernButton;