import React from 'react';

const LayoutHeader = ({ title, onBack }) => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm text-gray-800 py-4 px-6 flex items-center justify-between shadow-lg border-b border-gray-200">
      {onBack && (
        <button onClick={onBack} className="text-gray-800 text-2xl mr-4 hover:text-gray-600 transition-colors">
          {/* SVG de flecha hacia atrás */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
      )}
      <h1 className={`text-2xl font-bold ${!onBack ? 'text-center w-full' : ''}`}>{title}</h1>
      {onBack && <div className="w-6 h-6"></div>} {/* Espaciador */}
    </header>
  );
};

export default LayoutHeader;