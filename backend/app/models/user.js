const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const User = sequelize.define('User', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING, // admin or staff
        allowNull: false,
        validate: {
        notEmpty: true
        }
    }
    });

module.exports = User
