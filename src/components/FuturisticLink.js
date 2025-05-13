import React from 'react';

const FuturisticLink = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-sm text-blue-400 hover:underline transition-colors"
    >
      {text}
    </button>
  );
};

export default FuturisticLink;