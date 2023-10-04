const { Sequelize} = require('sequelize')
const config = require('./config')

console.log(config)
const sequelize = new Sequelize(
    config.name || '',
    config.user || '',
    config.password || '', {
      host: config.host || '',
      port: config.port || '',
      dialect: config.dialect || '',
    }
  );

// try {
//     sequelize.authenticate()
//     console.log('Connection has been established successfully.');

// } catch (error) {
//     console.error('Unable to connect to the database:', error);

// }

module.exports = sequelize
