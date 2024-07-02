const connect = require('../repository/connectmysql');

const createTurma = async (turmaData) => {
  const connection = await connect();
  const { descricao, id_disciplina, data_inicio, data_fim } = turmaData;
  const [result] = await connection.execute(
    'INSERT INTO tbl_turmas (descricao, id_disciplina, data_inicio, data_fim) VALUES (?, ?, ?, ?)',
    [descricao, id_disciplina, data_inicio, data_fim]
  );
  return { id: result.insertId, ...turmaData };
};

const getTurmas = async () => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM tbl_turmas');
  return rows;
};

module.exports = { createTurma, getTurmas };
