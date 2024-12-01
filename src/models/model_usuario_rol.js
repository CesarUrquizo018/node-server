const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./model_usuario'); 
const Rol = require('./model_rol'); 

class UsuarioRol extends Model {}

UsuarioRol.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Rol,
      key: 'id_rol'
    }
  }
}, {
  sequelize, 
  modelName: 'UsuarioRol',
  tableName: 'usuario_rol',
  timestamps: false
});

UsuarioRol.belongsTo(Usuario);
UsuarioRol.belongsTo(Rol);

module.exports = UsuarioRol;
