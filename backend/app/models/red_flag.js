const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Red_flag = sequelize.define('Bandeira_vermelha', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    mapeamento_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    resposta: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    });

module.exports = Red_flag
