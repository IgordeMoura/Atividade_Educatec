import React, { useEffect, useState } from 'react';
import api from '../../API';
import NavBar from '../../components/Admin/Navbar';
import style from './ListarProfessores.module.css';

const ListarProfessores = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await api.get('/professores');
        setProfessores(response.data);
      } catch (error) {
        console.error('Erro ao buscar professores:', error);
      }
    };
    fetchProfessores();
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <h2 className={style.title}>Professores</h2>
        <div className={style.table}>
          <div className={style.header}>
            <span>Nome</span>
          </div>
          <div className={style.body}>
            {professores.map((professor) => (
              <div className={style.row} key={professor.id}>
                <span>{professor.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListarProfessores;
