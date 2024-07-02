import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import NavBar from '../../components/Admin/Navbar'

const Dashboard = () => {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <h2>Bem Vindo ao Painel Administrador</h2>
        <p>O Que Deseja Fazer?</p>
        <ul className={styles['dashboard-list']}>
          <div className={styles.row}>
            <li className={styles['dashboard-list-item']}><Link to="/listar-alunos/admin">Listar Alunos</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/listar-professores/admin">Listar Professores</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/listar-turmas/admin">Listar Turmas</Link></li>
          </div>
          <div className={styles.row}>
            <li className={styles['dashboard-list-item']}><Link to="/cadastro-professor/admin">Cadastro Professor</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/cadastro-aluno/admin">Cadastro de Aluno</Link></li>
            <li className={styles['dashboard-list-item']}><Link to="/boletim/admin">Boletim</Link></li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
