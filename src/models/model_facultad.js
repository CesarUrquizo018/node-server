const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Universidad = require('./model_universidad');

class Facultad extends Model {}

Facultad.init({
  id_facultad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_facultad: {
    type: DataTypes.STRING
  },
  id_universidad: {
    type: DataTypes.INTEGER,
    references: {
      model: Universidad,
      key: 'id_universidad'
    }
  }
}, {
  sequelize,
  modelName: 'Facultad',
  tableName: 'facultad',
  timestamps: false
});

Facultad.belongsTo(Universidad, { foreignKey: 'id_universidad' });

module.exports = Facultad;