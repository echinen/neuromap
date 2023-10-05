const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Student = sequelize.define('Aluno', {
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
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    cor: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
    });

module.exports = Student
