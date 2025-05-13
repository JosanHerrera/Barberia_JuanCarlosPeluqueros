import React from 'react';
import LayoutHeader from './LayoutHeader';

const ContactScreen = ({ setCurrentPage }) => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Contacto y Ubicación" onBack={() => setCurrentPage('home')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ResservameAhora</h2>
          <p className="text-gray-600 mb-4">
            Dirección: Alcalá de Guadaira, Calle Nueva Alcalá, 54
          </p>
          <p className="text-gray-600 mb-4">
            Teléfono: 685815788
          </p>
          <p className="text-gray-600 mb-6">
            Correo Electrónico: info@resservameahora.com
          </p>

          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md mb-6">
            {/* Placeholder para el mapa de Alcalá de Guadaira */}
            <div className="flex items-center justify-center h-full text-gray-500">
              Mapa de Alcalá de Guadaira (Placeholder)
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            Horario: Lunes a Viernes, 9:00 AM - 8:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;