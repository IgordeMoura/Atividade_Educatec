const connect = require('../repository/connectmysql');

const createAluno = async (alunoData) => {
  const connection = await connect();
  const { nome, data_nascimento, telefone, email, sexo, id_endereco } = alunoData;
  const [result] = await connection.execute(
    'INSERT INTO tbl_aluno (nome, data_nascimento, telefone, email, sexo, id_endereco) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, data_nascimento, telefone, email, sexo, id_endereco]
  );
  return { id: result.insertId, ...alunoData };
};

const getAlunos = async () => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM tbl_aluno');
  return rows;
};

module.exports = { getAlunos, createAluno };
