const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./model_usuario');
const Proyecto = require('./model_proyecto');

class Anotacion extends Model {}

Anotacion.init({
    id_anotacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ContenidoAnotacion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El contenido de la anotación no puede estar vacío.'
            }
        }
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Proyecto,
            key: 'id_proyecto'
        }
    }
}, {
    sequelize,
    modelName: 'Anotacion',
    tableName: 'anotacion',
    timestamps: true // Habilita createdAt y updatedAt
});

Anotacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Anotacion.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Anotacion;
