const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Universidad extends Model {}

Universidad.init({
  id_universidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_universidad: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING
  }
}, {
  sequelize, // Aquí iría la instancia de Sequelize
  modelName: 'Universidad',
  tableName: 'universidad',
  timestamps: false
});

module.exports = Universidad;