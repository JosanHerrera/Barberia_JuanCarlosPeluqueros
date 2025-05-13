import React from 'react';

const GoldenLink = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-sm text-yellow-400 hover:underline transition-colors"
    >
      {text}
    </button>
  );
};

export default GoldenLink;