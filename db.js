require('dotenv').config();
const { Sequelize } = require('sequelize');
const logger = require('morgan');

const sequelize = new Sequelize(
  `${process.env.DBTYPE}://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`
);

try {
  sequelize.authenticate();
  console.log('Connection to database has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = { sequelize, logger };
