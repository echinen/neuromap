const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const User = sequelize.define('Usuario', {
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
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    perfil: {
        type: Sequelize.STRING, // default admin
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
    });

module.exports = User
