import React, { useState, useEffect } from 'react';
import LayoutHeader from './LayoutHeader';
import ModernButton from './ModernButton';
import NotificationMessage from './NotificationMessage';
import { getStorage } from '../utils/storage';

const SelectDateScreen = ({ setCurrentPage, setAppointmentDetails, appointmentDetails }) => {
  const [selectedDate, setSelectedDate] = useState(appointmentDetails.date || null);
  const [selectedTime, setSelectedTime] = useState(appointmentDetails.time || null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [notification, setNotification] = useState(null);

  const today = new Date();
  const days = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  }).filter(date => date.getDay() >= 1 && date.getDay() <= 5); // Filtrar para Lunes a Viernes

  const generateAvailableTimes = (date) => {
    const times = [];
    const startHour = 9;
    const endHour = 20; // Horario hasta las 20:00
    const interval = 30; // minutes

    for (let h = startHour; h < endHour; h++) {
      for (let m = 0; m < 60; m += interval) {
        const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        times.push(time);
      }
    }
    return times;
  };

  useEffect(() => {
    if (selectedDate) {
      setAvailableTimes(generateAvailableTimes(selectedDate));
    }
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirmDate = () => {
    if (selectedDate && selectedTime) {
      setAppointmentDetails({ ...appointmentDetails, date: selectedDate, time: selectedTime });
      setCurrentPage('confirmAppointment');
    } else {
      setNotification({ message: 'Por favor, selecciona una fecha y hora.', type: 'error' });
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <LayoutHeader title="Seleccionar Fecha y Hora" onBack={() => setCurrentPage('selectService')} />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Cuándo quieres venir?</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Selecciona un día:</h3>
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  className={`flex-shrink-0 py-3 px-5 rounded-lg transition-colors shadow-md ${
                    selectedDate && selectedDate.toDateString() === day.toDateString()
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {formatDate(day)}
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Selecciona una hora:</h3>
              <div className="grid grid-cols-3 gap-3">
                {availableTimes.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSelect(time)}
                    className={`py-3 rounded-lg transition-colors shadow-md ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ModernButton
            text="Confirmar Fecha y Hora"
            onClick={handleConfirmDate}
            disabled={!selectedDate || !selectedTime}
          />
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

export default SelectDateScreen;