const connect = require('../repository/connectmysql');

const createMatricula = async (matriculaData) => {
  const connection = await connect();
  const { id_aluno, ano, semestre, situacao } = matriculaData;
  const [result] = await connection.execute(
    'INSERT INTO tbl_matricula (id_aluno, ano, semestre, situacao) VALUES (?, ?, ?, ?)',
    [id_aluno, ano, semestre, situacao]
  );
  const [rows] = await connection.execute(
    'SELECT matricula FROM tbl_matricula WHERE id = ?',
    [result.insertId]
  );
  return { id: result.insertId, matricula: rows[0].matricula, ...matriculaData };
};

const getMatriculas = async () => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM tbl_matricula');
  return rows;
};

module.exports = { createMatricula, getMatriculas };
