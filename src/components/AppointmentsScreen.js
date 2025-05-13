import React, { useState, useEffect } from 'react';
import LayoutHeader from './LayoutHeader';
import { getStorage, setStorage } from '../utils/storage';

const AppointmentsScreen = ({ setCurrentPage }) => {
  const [appointments, setAppointments] = useState([]);
  const currentUser = getStorage('currentUser');

  useEffect(() => {
    if (currentUser) {
      const allAppointments = getStorage('appointments') || [];
      const userAppointments = allAppointments.filter(app => app.userId === currentUser.id);
      setAppointments(userAppointments);
    } else {
      setAppointments([]);
    }
  }, [currentUser]);

  const handleCancelAppointment = (id) => {
    const allAppointments = getStorage('appointments') || [];
    const updatedAppointments = allAppointments.filter(app => app.id !== id);
    setStorage('appointments', updatedAppointments);
    setAppointments(updatedAppointments.filter(app => app.userId === currentUser.id));
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Mis Citas" onBack={() => setCurrentPage('home')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tus Próximas Citas</h2>

          {appointments.length === 0 ? (
            <p className="text-gray-600 text-center">No tienes citas programadas.</p>
          ) : (
            <ul className="space-y-6">
              {appointments.map(app => (
                <li key={app.id} className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
                  <p className="text-lg font-semibold text-gray-800 mb-2">{app.service.name} con {app.barber.name}</p>
                  <p className="text-gray-600 mb-1">{formatDate(app.date)} a las {app.time}</p>
                  <p className="text-gray-600 font-bold mb-4">{app.service.price}€</p>
                  <button
                    onClick={() => handleCancelAppointment(app.id)}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
                  >
                    Cancelar Cita
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsScreen;