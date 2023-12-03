const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');


const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : (msg, time, level) => {
    console.log(`${level} ${msg} (${time} ms)`)
  }
}

if (config.isProd) {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
