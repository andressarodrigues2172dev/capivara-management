require('dotenv').config(); 

const Sequelize = require('sequelize');

// Configuração da conexão Sequelize usando variáveis de ambiente
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,  // Nome do banco de dados
  process.env.MYSQL_USERNAME,  // Nome de usuário MySQL
  process.env.MYSQL_PASSWORD,   // Senha do MySQL
  {
    host: process.env.MYSQL_HOST,  // Host do MySQL
    port: process.env.MYSQL_DOCKER_PORT, // Adicione esta linha
    dialect: 'mysql',               // Dialeto (MySQL)
  }
);

module.exports = sequelize;

// Conexão e sincronia
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

sequelize.sync({ force: false });
