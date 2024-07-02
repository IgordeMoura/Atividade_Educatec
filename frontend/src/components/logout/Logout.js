import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Logout.module.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('tipo_usuario'); 
    navigate('/login'); 
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
