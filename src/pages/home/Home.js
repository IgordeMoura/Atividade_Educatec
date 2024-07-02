import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import imagem from '../../assets/certifeco2023-jeune-femme-sourillante-lunettes-documents.png'
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <div>
        <Navbar/>
        <div className={styles.container}>
          <div>
            <h1>Olá Seja <span>Bem Vindo</span></h1>
            <p>Nosso sistema é a solução completa para a administração eficiente de instituições educacionais, projetado para facilitar e otimizar todos os aspectos da gestão escolar. Com uma interface intuitiva e recursos poderosos, proporcionamos uma experiência integrada que atende às necessidades de administradores, professores e alunos.</p>
            <button>Visitar</button>
          </div>
          <div>
            <img src={imagem}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
