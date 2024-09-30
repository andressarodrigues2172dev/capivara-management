require('dotenv').config(); 

const Sequelize = require('sequelize');

// Usando a URL completa do MySQL fornecida pelo Railway
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',               // Dialeto (MySQL)
  dialectOptions: {
    ssl: {
      require: true, // Ative isso se o banco de dados exigir SSL (verifique a documentação do Railway)
      rejectUnauthorized: false, // Permite certificados SSL auto-assinados
    },
  },
});

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