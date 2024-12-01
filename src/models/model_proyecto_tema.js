// src/models/model_proyecto_tema.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ProyectoTema extends Model {}

ProyectoTema.init({
    id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'proyecto',
            key: 'id_proyecto'
        },
        onDelete: 'CASCADE'
    },
    id_tema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'tema',
            key: 'id_tema'
        },
        onDelete: 'CASCADE'
    }
}, {
    sequelize,
    modelName: 'ProyectoTema',
    tableName: 'proyecto_tema',
    timestamps: false
});

module.exports = ProyectoTema;
