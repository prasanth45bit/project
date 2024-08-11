import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const handleActivity = () => {
      const currentTime = Date.now();
      localStorage.setItem('lastActivityTime', currentTime.toString());
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);

    handleActivity();

   
    const checkInactivity = setInterval(() => {
      const lastActivityTime = localStorage.getItem('lastActivityTime');
      const currentTime = Date.now();

      if (lastActivityTime && currentTime - parseInt(lastActivityTime, 10) > 5 * 60 * 1000) {
        handleLogout();
      }
    }, 60 * 1000);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      clearInterval(checkInactivity);
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('lastActivityTime');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
