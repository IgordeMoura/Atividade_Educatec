import React, { useEffect, useState } from 'react';
import api from '../../API';
import NavBar from '../../components/Admin/Navbar';
import style from './ListarAlunos.module.css';

const ListarAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await api.get('/alunos');
        setAlunos(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    };
    fetchAlunos();
  }, []);

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <h2 className={style.title}>Alunos</h2>
        <div className={style.table}>
          <div className={style.header}>
            <span>Nome</span>
          </div>
          <div className={style.body}>
            {alunos.map((aluno) => (
              <div className={style.row} key={aluno.id}>
                <span>{aluno.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </> 
  );
};

export default ListarAlunos;
