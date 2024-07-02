import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './navbar.module.css';
import Logout from '../logout/Logout';

const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.estilizado}>
        <img src={logo} className={style.logo}/>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Logout/>
      </nav>
    </div>
  );
};

export default Navbar;
