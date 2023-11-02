const { Sequelize } = require('sequelize');
const config = require('./config.json');

// Define the current environment (e.g., 'development')
const env = process.env.NODE_ENV || 'development';

// Load the database configuration for the current environment from config.json
const dbConfig = config[env];

// Create a new Sequelize instance with the loaded configuration
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    // Additional options here (e.g., logging, timezone)
  }
);

module.exports = sequelize;
