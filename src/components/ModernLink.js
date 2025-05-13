import React from 'react';

const ModernLink = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-sm text-blue-700 hover:underline transition-colors"
    >
      {text}
    </button>
  );
};

export default ModernLink;