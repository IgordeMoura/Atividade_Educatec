import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/Admin/Navbar';
import style from './cadastroProfessor.module.css';

const CadastroProfessor = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState({ cep: '', rua: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '' });

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/professores', { nome, dataNascimento, telefone, email, id_endereço});
      console.log('Professor cadastrado:', response.data);
      alert('Professor cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  const handleEnderecoChange = async (cep) => {
    setEndereco((prevEndereco) => ({
      ...prevEndereco,
      cep
    }));
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.data.erro) {
          setEndereco((prevEndereco) => ({
            ...prevEndereco,
            cep: response.data.cep,
            rua: response.data.logradouro,
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
          }));
        } else {
          console.error('CEP não encontrado.');
          setEndereco({ cep: '', rua: '', complemento: '', bairro: '', cidade: '', estado: '' });
        }
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        setEndereco({ cep: '', rua: '', complemento: '', bairro: '', cidade: '', estado: '' });
      }
    } else if (cep.length < 8) {
      setEndereco({ cep, rua: '', complemento: '', bairro: '', cidade: '', estado: '' });
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className={style.container}>
          <form onSubmit={handleCadastro}>
            <h2>Cadastro de Professor</h2>
            <div>
              <label>Nome</label>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
              <label>Data de Nascimento</label>
              <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>
            <div>
              <label>Telefone</label>
              <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>CEP</label>
              <input type="text" value={endereco.cep} onChange={(e) => handleEnderecoChange(e.target.value)} />
            </div>
            <div>
              <label>Rua</label>
              <input type="text" value={endereco.rua} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, rua: e.target.value }))} />
            </div>
            <div>
              <label>Número</label>
              <input type="text" value={endereco.numero} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, numero: e.target.value }))} />
            </div>
            <div>
              <label>Complemento</label>
              <input type="text" value={endereco.complemento} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, complemento: e.target.value }))} />
            </div>
            <div>
              <label>Bairro</label>
              <input type="text" value={endereco.bairro} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, bairro: e.target.value }))} />
            </div>
            <div>
              <label>Cidade</label>
              <input type="text" value={endereco.cidade} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, cidade: e.target.value }))} />
            </div>
            <div>
              <label>Estado</label>
              <input type="text" value={endereco.estado} onChange={(e) => setEndereco((prevEndereco) => ({ ...prevEndereco, estado: e.target.value }))} />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastroProfessor;
