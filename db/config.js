const { config } = require('../config/config');


module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
    logging: (msg, time, level) => {
      console.log(`${level} ${msg} (${time} ms)`)
    }
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
