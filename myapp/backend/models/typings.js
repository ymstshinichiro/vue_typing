'use strict';
module.exports = (sequelize, DataTypes) => {
  const typings = sequelize.define('typings', {
    title: DataTypes.STRING,
    premise: DataTypes.STRING,
    answer: DataTypes.STRING,
    output: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    language: DataTypes.STRING,
    version: DataTypes.STRING,
    rank: DataTypes.STRING
  }, {
    underscored: true,
  });
  typings.associate = function(models) {
    // associations can be defined here
  };
  return typings;
};