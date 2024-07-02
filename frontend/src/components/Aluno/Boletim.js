import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function VisualizarNotas() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    axios.get('/notas')
      .then(response => setNotas(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
        <Navbar/>
        <div>
        <h1>Suas Notas</h1>
        <ul>
            {notas.map(nota => (
            <li key={nota.id}>{nota.disciplina}: {nota.nota}</li>
            ))}
        </ul>
        </div>
    </>
  );
}

export default VisualizarNotas;
