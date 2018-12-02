'use strict';
module.exports = (sequelize, DataTypes) => {
  const typings = sequelize.define('typings', {
    title: DataTypes.STRING,
    answer: DataTypes.STRING,
    output: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
  });
  typings.associate = function(models) {
    // associations can be defined here
  };
  return typings;
};