import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.estilizado}>
        <img src={logo} className={style.logo}/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login" className={style.login}>Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
