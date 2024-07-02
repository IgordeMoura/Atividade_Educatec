const connect = require('../repository/connectmysql');

const createProfessor = async (professorData) => {
  const connection = await connect();
  const { nome, data_nascimento, telefone, email, id_endereco } = professorData;
  const [result] = await connection.execute(
    'INSERT INTO tbl_professor (nome, data_nascimento, telefone, email, id_endereco) VALUES (?, ?, ?, ?, ?)',
    [nome, data_nascimento, telefone, email, id_endereco]
  );
  return { id: result.insertId, ...professorData };
};

const getProfessores = async () => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM tbl_professor');
  return rows;
};

module.exports = { createProfessor, getProfessores };
