const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Mapping = sequelize.define('Mapeamento', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tabela: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    esfera: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    pergunta: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    tipo_transtorno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    });

module.exports = Mapping
