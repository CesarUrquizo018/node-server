const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./model_proyecto');

class Fuente extends Model {}

Fuente.init({
    id_fuente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreFuente: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: { msg: 'El nombre de la fuente no puede estar vacío.' }
        }
    },
    DescripcionFuente: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    URLFuente: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            isUrl: { msg: 'Debe ser una URL válida.' }
        }
    },
    FechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW // Fecha actual por defecto
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
    modelName: 'Fuente',
    tableName: 'fuente',
    timestamps: false
});

Fuente.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Fuente;
