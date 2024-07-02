import React, { useEffect, useState } from 'react';
import api from '../../API';
import NavBar from '../../components/Admin/Navbar'

const Boletim = () => {
  const [boletins, setBoletins] = useState([]);

  useEffect(() => {
    const fetchBoletins = async () => {
      try {
        const response = await api.get(`/boletins`);
        setBoletins(response.data);
      } catch (error) {
        console.error('Erro ao buscar boletins:', error);
      }
    };
    fetchBoletins();
  }, []);

  return (
    <div>
      <NavBar/>
      <h2>Boletins</h2>
      <ul>
        {boletins.map((boletim) => (
          <li key={boletim.id}>
            {boletim.aluno} - {boletim.materia}: {boletim.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boletim;
