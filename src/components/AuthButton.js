import React from 'react';

const AuthButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
    >
      {text}
    </button>
  );
};

export default AuthButton;