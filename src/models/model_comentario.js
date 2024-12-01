const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./model_usuario'); 
const Proyecto = require('./model_proyecto'); 

class Comentario extends Model {}

Comentario.init({
  id_comentario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fecha_comentario: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
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
  }
}, {
  sequelize,
  modelName: 'Comentario',
  tableName: 'comentario',
  timestamps: false
});

Comentario.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Comentario.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Comentario;