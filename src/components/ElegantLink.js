import React from 'react';

const ElegantLink = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-sm text-gray-700 hover:underline transition-colors"
    >
      {text}
    </button>
  );
};

export default ElegantLink;