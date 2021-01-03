'use strict';

let fs        = require('fs');
let path      = require('path');
let Sequelize = require('sequelize');
let basename  = path.basename(module.filename);
let env       = process.env.NODE_ENV || 'development';
let config    = require(__dirname + '/../config/sequelize_config.js')[env];
let db        = {};

if (config.url){
  db.sequelize = new Sequelize(config.url,config);
} else if (config.use_env_variable) {
  db.sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  db.sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    let model = db.sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
