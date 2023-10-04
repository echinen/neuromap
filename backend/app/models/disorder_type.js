const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Disorder_type = sequelize.define('Tipo_transtorno', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
    });

module.exports = Disorder_type
