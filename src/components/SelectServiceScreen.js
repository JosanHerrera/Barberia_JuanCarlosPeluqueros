import React, { useState } from 'react';
import LayoutHeader from './LayoutHeader';
import { services } from '../mock/services';

const SelectServiceScreen = ({ setCurrentPage, setAppointmentDetails, appointmentDetails }) => {
  const [selectedService, setSelectedService] = useState(appointmentDetails.service || null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setAppointmentDetails({ ...appointmentDetails, service });
    setCurrentPage('selectDate');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Seleccionar Servicio" onBack={() => setCurrentPage('selectBarber')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Qué te vas a hacer?</h2>
          <ul className="space-y-4">
            {services.map(service => (
              <li key={service.id}>
                <button
                  onClick={() => handleSelectService(service)}
                  className={`w-full text-left py-4 px-6 rounded-lg transition-colors shadow-md flex justify-between items-center ${
                    selectedService && selectedService.id === service.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg font-semibold">{service.name}</span>
                  <span className="text-lg font-bold">{service.price}€</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectServiceScreen;