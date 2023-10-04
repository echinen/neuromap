const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    });

module.exports = Subject
