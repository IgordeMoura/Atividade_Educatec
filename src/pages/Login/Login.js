// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../API';
import Navbar from '../../components/Navbar/Navbar';

import './login.module.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { login, senha });
      const { token, tipo_usuario } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('tipo_usuario', tipo_usuario);

      if (tipo_usuario === 'Admin') {
        navigate('/dashboard');
      } else if (tipo_usuario === 'Professor') {
        navigate('/professor/dashboard');
      } else if (tipo_usuario === 'Aluno') {
        navigate('/aluno/dashboard');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Login ou senha inválidos');
    }
  };

  return (
    <div className="container">
      <Navbar/>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
