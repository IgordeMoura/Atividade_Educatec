import React, { useEffect, useState } from 'react';
import api from '../../API';
import NavBar from '../../components/Admin/Navbar';
import style from './ListarTurmas.module.css';

const ListarTurmas = () => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await api.get('/turmas');
        setTurmas(response.data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error);
      }
    };
    fetchTurmas();
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <h2 className={style.title}>Turmas</h2>
        <div className={style.table}>
          <div className={style.header}>
            <span>Descrição</span>
          </div>
          <div className={style.body}>
            {turmas.map((turma) => (
              <div className={style.row} key={turma.id}>
                <span>{turma.descricao}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListarTurmas;
