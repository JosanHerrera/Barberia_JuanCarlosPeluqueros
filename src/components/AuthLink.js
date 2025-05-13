import React from 'react';

const AuthLink = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-sm text-black hover:underline transition-colors"
    >
      {text}
    </button>
  );
};

export default AuthLink;