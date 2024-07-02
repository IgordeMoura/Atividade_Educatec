const connect = require('../repository/connectmysql');

const getBoletim = async (idAluno) => {
  const connection = await connect();
  const [rows] = await connection.execute(
    `SELECT m.matricula, n.nota1, n.nota2, n.nota3, n.nota4, n.media, m.situacao
     FROM tbl_matricula m
     JOIN tbl_notas n ON m.id = n.id_matricula
     WHERE m.id_aluno = ?`,
    [idAluno]
  );
  return rows;
};

module.exports = { getBoletim };
