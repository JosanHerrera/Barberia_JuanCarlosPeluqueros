import React from 'react';

const FuturisticInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full mt-4 px-4 py-3 bg-gray-800 text-blue-400 border border-blue-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-blue-500"
    />
  );
};

export default FuturisticInput;