'use strict';
module.exports = function(sequelize, DataTypes) {
  const analysis = sequelize.define('analysis', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        analysis.belongsTo(models.user);
      }
    }
  });
  return analysis;
};
