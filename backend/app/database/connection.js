const Sequelize = require('sequelize')
const config = require('../config')

// console.log(config)

const sequelize = new Sequelize(
    config.name || 'neuromap',
    config.user || 'root',
    config.password || 'Fiap123', {
      host: config.host || 'localhost',
      port: config.port || '3306',
      dialect: config.dialect || 'mysql',
    }
  );

module.exports = sequelize

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'neuromap',
//   password: 'Fiap123'
// })

// try {
//     sequelize.authenticate()
//     console.log('Connection has been established successfully.');

// } catch (error) {
//     console.error('Unable to connect to the database:', error);

// }

// module.exports = pool.promise()
