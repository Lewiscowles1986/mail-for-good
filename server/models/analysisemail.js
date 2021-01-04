'use strict';
module.exports = function(sequelize, DataTypes) {
  const analysisEmail = sequelize.define('analysisEmail', {
    sesMessageId: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        analysisEmail.belongsTo(models.analysis);
      }
    }
  });
  return analysisEmail;
};
