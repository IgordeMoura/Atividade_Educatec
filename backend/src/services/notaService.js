const connect = require('../repository/connectmysql');

const createNota = async (notaData) => {
  const connection = await connect();
  const { id_matricula, nota1, nota2, nota3, nota4 } = notaData;
  const [result] = await connection.execute(
    'INSERT INTO tbl_notas (id_matricula, nota1, nota2, nota3, nota4) VALUES (?, ?, ?, ?, ?)',
    [id_matricula, nota1, nota2, nota3, nota4]
  );
  return { id: result.insertId, ...notaData };
};

module.exports = { createNota };
