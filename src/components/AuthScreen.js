import React, { useState } from 'react';
import ModernInput from './ModernInput';
import ModernButton from './ModernButton';
import ModernLink from './ModernLink';
import NotificationMessage from './NotificationMessage';
import { setStorage, getStorage } from '../utils/storage';

const AuthScreen = ({ setCurrentPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [notification, setNotification] = useState(null);

  const handleAuth = () => {
    if (isLogin) {
      const users = getStorage('users') || [];
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        setStorage('currentUser', user);
        setCurrentPage('home');
      } else {
        setNotification({ message: 'Credenciales incorrectas', type: 'error' });
      }
    } else {
      const users = getStorage('users') || [];
      if (users.find(u => u.email === email)) {
        setNotification({ message: 'El usuario ya existe', type: 'error' });
      } else {
        const newUser = { id: Date.now(), name, email, password };
        setStorage('users', [...users, newUser]);
        setStorage('currentUser', newUser);
        setCurrentPage('home');
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zcKp7PeYLtCPgmTbn59N6BRyWUl87afK30Dw)' }}>
      <div className="relative z-10 w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border border-gray-200 mt-20"> {/* Ajuste de margen superior */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>
        {!isLogin && (
          <ModernInput
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <ModernInput
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ModernInput
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ModernButton text={isLogin ? 'Entrar' : 'Crear Cuenta'} onClick={handleAuth} />
        <ModernLink
          text={isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
          onClick={() => setIsLogin(!isLogin)}
        />
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

export default AuthScreen;