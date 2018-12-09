'use strict';
module.exports = (sequelize, DataTypes) => {
  const typings = sequelize.define('typings', {
    title: DataTypes.STRING,
    answer: DataTypes.STRING,
    output: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    language: DataTypes.STRING,
    version: DataTypes.STRING,
    rank: DataTypes.STRING
    // TODO 追加する
    // author: お題を追加した人
    // language: プログラミング言語の種類
    // version: 言語のバージョン
    // rank: お題の難しさ (ruby silver/goldへの対応など。3段階?)
  }, {
    underscored: true,
  });
  typings.associate = function(models) {
    // associations can be defined here
  };
  return typings;
};