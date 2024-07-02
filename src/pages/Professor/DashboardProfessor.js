import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Professor/Navbar';
import styles from './Dashboard.module.css';

function DashboardProfessor() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
        <h2>Bem Vindo ao Painel do Professor</h2>
        <p>O Que Deseja Fazer?</p>
        <ul className={styles['dashboard-list']}>
          <div className={styles.row}>
            <li className={styles['dashboard-list-item']}><Link to="/professor/listar-alunos">Listar Alunos</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/professor/lancar-notas">Lançar Notas</Link></li>
          </div>
        </ul>
        </div>
    </>
  );
}

export default DashboardProfessor;
