const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ajuste o caminho conforme necessário

const Capivara = sequelize.define('Capivara', {
  nome: { type: DataTypes.STRING, allowNull: false },//Nome da capivara
  idade: { type: DataTypes.INTEGER },//Idade da capivara
  peso: { type: DataTypes.DECIMAL(5, 2) },//Peso da capivara
  estado_de_saude: { type: DataTypes.TEXT }, // Estado de saúde da capivara
  habitat: { type: DataTypes.TEXT }, // Habitat da capivara
  comportamento: { type: DataTypes.TEXT }, // Comportamento da capivara
  dieta: { type: DataTypes.TEXT }, // Dieta da capivara
  genero: { type: DataTypes.ENUM('M', 'F') }, // Gênero (Masculino ou Feminino)
  observacoes: { type: DataTypes.TEXT }, // Observações adicionais
  foto_url: { type: DataTypes.STRING }, // URL da foto da capivara
}, {
  timestamps: false // Desativa as colunas createdAt e updatedAt
});

module.exports = Capivara;
