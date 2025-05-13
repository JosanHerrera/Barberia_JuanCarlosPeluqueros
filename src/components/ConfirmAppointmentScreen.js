import React, { useState } from 'react';
import LayoutHeader from './LayoutHeader';
import ModernButton from './ModernButton';
import NotificationMessage from './NotificationMessage';
import { getStorage, setStorage } from '../utils/storage';

const ConfirmAppointmentScreen = ({ setCurrentPage, appointmentDetails, setAppointmentDetails }) => {
  const [notification, setNotification] = useState(null);

  const handleConfirm = () => {
    const currentUser = getStorage('currentUser');
    if (!currentUser) {
      setNotification({ message: 'Debes iniciar sesión para confirmar la cita.', type: 'error' });
      setCurrentPage('auth');
      return;
    }

    const appointments = getStorage('appointments') || [];
    const newAppointment = {
      ...appointmentDetails,
      userId: currentUser.id,
      userName: currentUser.name,
      id: Date.now(),
      status: 'pending', // or 'confirmed'
    };

    setStorage('appointments', [...appointments, newAppointment]);
    setAppointmentDetails({}); // Clear details after booking

    // Simular voz asistente
    const confirmationMessage = `Cita confirmada con ${newAppointment.barber.name} para el ${new Date(newAppointment.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} a las ${newAppointment.time}. Gracias por confiar en Resservame Ahora.`;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(confirmationMessage);
      utterance.lang = 'es-ES';
      // Intentar usar una voz que suene más natural (puede variar según el navegador y sistema)
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.lang === 'es-ES' && voice.name.includes('female')); // Buscar voz femenina en español
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert(confirmationMessage); // Fallback si la síntesis de voz no está disponible
    }


    setCurrentPage('appointments');
  };

  const formatDate = (date) => {
    if (!date) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Confirmar Cita" onBack={() => setCurrentPage('selectDate')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Resumen de tu Cita</h2>

          {appointmentDetails.barber && (
            <div className="mb-4">
              <p className="text-gray-700 text-lg font-semibold">Barbero:</p>
              <p className="text-gray-600 text-xl">{appointmentDetails.barber.name}</p>
            </div>
          )}

          {appointmentDetails.service && (
            <div className="mb-4">
              <p className="text-gray-700 text-lg font-semibold">Servicio:</p>
              <p className="text-gray-600 text-xl">{appointmentDetails.service.name}</p>
              <p className="text-gray-600 text-xl font-bold">{appointmentDetails.service.price}€</p>
            </div>
          )}

          {appointmentDetails.date && appointmentDetails.time && (
            <div className="mb-6">
              <p className="text-gray-700 text-lg font-semibold">Fecha y Hora:</p>
              <p className="text-gray-600 text-xl">{formatDate(appointmentDetails.date)}</p>
              <p className="text-gray-600 text-xl">{appointmentDetails.time}</p>
            </div>
          )}

          <ModernButton text="Confirmar Cita" onClick={handleConfirm} />
        </div>
      </div>
      {notification && (
        <NotificationMessage
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default ConfirmAppointmentScreen;