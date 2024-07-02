const connect = require('../repository/connectmysql');

const login = async (login, senha) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM tbl_usuarios WHERE login = ? AND senha = ?', [login, senha]);
  if (rows.length > 0) {
    const tipo_usuario = rows[0].tipo_usuario; // Obtém o tipo_usuario do banco de dados
    // Aqui, você deve gerar um token JWT (ou outra forma de autenticação)
    const token = "fake-jwt-token"; // Exemplo de token JWT fictício
    return { token, tipo_usuario };
  } else {
    throw new Error('Login ou senha inválidos');
  }
};

module.exports = { login };
