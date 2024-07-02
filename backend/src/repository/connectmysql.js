const mysql2 = require('mysql2/promise');

const connect = async () => {
  return await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_educatec',
  });
};

module.exports = connect;
