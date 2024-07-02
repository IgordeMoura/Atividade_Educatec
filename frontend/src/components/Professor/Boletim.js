import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function LancarNotas() {
  const [idAluno, setIdAluno] = useState('');
  const [nota, setNota] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/notas', { idAluno, nota, nota2, nota3, nota4})
      .then(response => alert('Nota lançada com sucesso'))
      .catch(error => console.error(error));
  };

  return (
    <>
      <Navbar/>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Lançar Notas</h1>
          <input
            type="text"
            placeholder="ID do Aluno"
            value={idAluno}
            onChange={e => setIdAluno(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nota"
            value={nota}
            onChange={e => setNota(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nota"
            value={nota2}
            onChange={e => setNota2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nota"
            value={nota3}
            onChange={e => setNota3(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nota"
            value={nota4}
            onChange={e => setNota4(e.target.value)}
          />
          <button type="submit">Lançar Nota</button>
        </form>
      </div>
    </>
  );
}

export default LancarNotas;
