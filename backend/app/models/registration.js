const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Registration = sequelize.define('Matricula', {
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
    turma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
    });

module.exports = Registration
