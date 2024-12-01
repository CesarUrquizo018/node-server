// src/models/model_usuario_facultad_universidad.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class UsuarioFacultadUniversidad extends Model {}

UsuarioFacultadUniversidad.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'usuario',
            key: 'id_usuario'
        },
        onDelete: 'CASCADE'
    },
    id_facultad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'facultad',
            key: 'id_facultad'
        },
        onDelete: 'CASCADE'
    },
    id_universidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'universidad',
            key: 'id_universidad'
        },
        onDelete: 'CASCADE'
    }
}, {
    sequelize,
    modelName: 'UsuarioFacultadUniversidad',
    tableName: 'usuario_facultad_universidad',
    timestamps: false
});

module.exports = UsuarioFacultadUniversidad;
