import React from 'react';
import LayoutHeader from './LayoutHeader';
import ModernButton from './ModernButton';

const HomeScreen = ({ setCurrentPage }) => {
  const handleSelectBarber = () => {
    setCurrentPage('selectBarber');
  };

  const handleViewAppointments = () => {
    setCurrentPage('appointments');
  };

  const handleContact = () => {
    setCurrentPage('contact');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Inicio" />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200 text-center">
          {/* Logo de la app */}
          <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0utq0ceYvblOpQY7AJg0nTmsBhyINFZ6E3XCU" alt="Logo ResservameAhora" className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-md" />
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bienvenido a ResservameAhora</h2>
          <p className="text-gray-600 mb-8">
            Reserva tu próxima cita de forma rápida y sencilla.
          </p>
          <ModernButton text="Reservar Cita" onClick={handleSelectBarber} />
          <ModernButton text="Mis Citas" onClick={handleViewAppointments} />
          <ModernButton text="Contacto y Ubicación" onClick={handleContact} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;