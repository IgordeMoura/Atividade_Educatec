import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Aluno/Navbar';
import styles from './Dashboard.module.css';

function DashboardAluno() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
        <h2>Bem Vindo ao Painel do Aluno</h2>
        <p>O Que Deseja Fazer?</p>
        <ul className={styles['dashboard-list']}>
          <div className={styles.row}>
            <li className={styles['dashboard-list-item']}><Link to="/aluno/listar-professores">Listar Professores</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/aluno/visualizar-notas">Visualizar Notas</Link></li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default DashboardAluno;
