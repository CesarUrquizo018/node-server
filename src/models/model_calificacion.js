const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./model_usuario');
const Proyecto = require('./model_proyecto');

class Calificacion extends Model {}

Calificacion.init({
  id_calificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  puntaje: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5
  }
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id_proyecto'
    }
  },
  fecha_calificacion: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  modelName: 'Calificacion',
  tableName: 'calificacion',
  timestamps: false
});

Calificacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Calificacion.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Calificacion;