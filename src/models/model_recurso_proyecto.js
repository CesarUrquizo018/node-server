const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./model_proyecto'); 

class RecursoProyecto extends Model {}

RecursoProyecto.init({
  id_recurso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_archivo: {
    type: DataTypes.STRING
  },
  tipo_archivo: {
    type: DataTypes.STRING
  },
  url_archivo: {
    type: DataTypes.STRING
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    references: {
      model: Proyecto,
      key: 'id_proyecto'
    }
  }
}, {
  sequelize, // Aquí iría la instancia de Sequelize
  modelName: 'RecursoProyecto',
  tableName: 'recursos_proyecto',
  timestamps: false
});

RecursoProyecto.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = RecursoProyecto;