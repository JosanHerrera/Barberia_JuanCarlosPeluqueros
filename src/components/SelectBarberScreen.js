import React, { useState } from 'react';
import LayoutHeader from './LayoutHeader';
import { barbers } from '../mock/barbers';

const SelectBarberScreen = ({ setCurrentPage, setAppointmentDetails, appointmentDetails }) => {
  const [selectedBarber, setSelectedBarber] = useState(appointmentDetails.barber || null);

  const handleSelectBarber = (barber) => {
    setSelectedBarber(barber);
    setAppointmentDetails({ ...appointmentDetails, barber });
    setCurrentPage('selectService');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Seleccionar Barbero" onBack={() => setCurrentPage('home')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Elige a tu Barbero</h2>
          <ul className="space-y-4">
            {barbers.map(barber => (
              <li key={barber.id}>
                <button
                  onClick={() => handleSelectBarber(barber)}
                  className={`w-full text-left py-4 px-6 rounded-lg transition-colors shadow-md flex items-center ${
                    selectedBarber && selectedBarber.id === barber.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0utq0ceYvblOpQY7AJg0nTmsBhyINFZ6E3XCU" alt="Logo ResservameAhora" className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-700" />
                  <span className="text-lg font-semibold">{barber.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectBarberScreen;