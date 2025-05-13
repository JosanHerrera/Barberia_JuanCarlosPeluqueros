import React from 'react';

const GoldenInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full mt-4 px-4 py-3 bg-gray-800 text-yellow-400 border border-yellow-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition placeholder-yellow-500"
    />
  );
};

export default GoldenInput;