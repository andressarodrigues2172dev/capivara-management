// db.js
require('dotenv').config();  // Carregar variáveis de ambiente do arquivo .env

const Sequelize = require('sequelize');

// Configuração da conexão Sequelize usando variáveis de ambiente
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,  // Nome do banco de dados
  process.env.MYSQL_USERNAME,  // Nome de usuário MySQL
  process.env.MYSQL_PASSWORD,  // Senha do MySQL
  {
    host: process.env.MYSQL_HOST,  // Host do MySQL (localhost ou 127.0.0.1)
    port: parseInt(process.env.MYSQL_LOCAL_PORT, 10),  // Porta do MySQL (3306)
    dialect: 'mysql',  // Dialeto para MySQL
    logging: console.log,  // Habilitar logs para depuração
    define: {
      timestamps: false  // Opcional, para desabilitar timestamps automáticos
    }
  }
);

// Função para testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida.');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

// Sincronizar os modelos, sem forçar a recriação das tabelas
sequelize.sync({ force: false })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar os modelos:', err);
  });

// Exportando a instância do Sequelize para uso em outros arquivos
module.exports = sequelize;
