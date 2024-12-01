// src/models/model_tema.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Tema extends Model {}

Tema.init({
    id_tema: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_tema: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Tema',
    tableName: 'tema',
    timestamps: false
});

module.exports = Tema;
