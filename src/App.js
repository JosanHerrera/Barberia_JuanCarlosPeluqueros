import React, { useState, useEffect } from 'react';
import AuthScreen from './components/AuthScreen';
import HomeScreen from './components/HomeScreen';
import SelectBarberScreen from './components/SelectBarberScreen';
import SelectServiceScreen from './components/SelectServiceScreen';
import SelectDateScreen from './components/SelectDateScreen';
import ConfirmAppointmentScreen from './components/ConfirmAppointmentScreen';
import AppointmentsScreen from './components/AppointmentsScreen';
import ContactScreen from './components/ContactScreen';
import { getStorage } from './utils/storage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('auth');
  const [appointmentDetails, setAppointmentDetails] = useState({});

  useEffect(() => {
    const currentUser = getStorage('currentUser');
    if (currentUser) {
      setCurrentPage('home');
    } else {
      setCurrentPage('auth');
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'auth':
        return <AuthScreen setCurrentPage={setCurrentPage} />;
      case 'home':
        return <HomeScreen setCurrentPage={setCurrentPage} />;
      case 'selectBarber':
        return (
          <SelectBarberScreen
            setCurrentPage={setCurrentPage}
            setAppointmentDetails={setAppointmentDetails}
            appointmentDetails={appointmentDetails}
          />
        );
      case 'selectService':
        return (
          <SelectServiceScreen
            setCurrentPage={setCurrentPage}
            setAppointmentDetails={setAppointmentDetails}
            appointmentDetails={appointmentDetails}
          />
        );
      case 'selectDate':
        return (
          <SelectDateScreen
            setCurrentPage={setCurrentPage}
            setAppointmentDetails={setAppointmentDetails}
            appointmentDetails={appointmentDetails}
          />
        );
      case 'confirmAppointment':
        return (
          <ConfirmAppointmentScreen
            setCurrentPage={setCurrentPage}
            appointmentDetails={appointmentDetails}
            setAppointmentDetails={setAppointmentDetails}
          />
        );
      case 'appointments':
        return <AppointmentsScreen setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactScreen setCurrentPage={setCurrentPage} />;
      default:
        return <AuthScreen setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App transition-opacity duration-500 ease-in-out opacity-100">
      {renderPage()}
    </div>
  );
};

export default App;

// DONE