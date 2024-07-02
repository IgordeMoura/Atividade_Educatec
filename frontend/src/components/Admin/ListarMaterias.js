import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/Admin/Navbar'

const ListarMaterias = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await axios.get('http://localhost:3333/aluno/materias');
        setMaterias(response.data);
      } catch (error) {
        console.error('Erro ao buscar matérias:', error);
      }
    };
    fetchMaterias();
  }, []);

  return (
    <div>
      <NavBar/>
      <h2>Listagem de Matérias</h2>
      <ul>
        {materias.map((materia) => (
          <li key={materia.id}>{materia.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarMaterias;
