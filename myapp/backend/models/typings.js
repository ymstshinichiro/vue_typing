'use strict';
module.exports = (sequelize, DataTypes) => {
  const typings = sequelize.define('typings', {
    title: DataTypes.STRING,
    answer: DataTypes.STRING,
    output: DataTypes.STRING,
    description: DataTypes.STRING
    // TODO 追加する
    // language: プログラミング言語の種類
    // version: 言語のバージョン
    // rank: お題の難しさ (ruby silver/goldへの対応など。3段階?)
    // author: お題を追加した人
  }, {
    underscored: true,
  });
  typings.associate = function(models) {
    // associations can be defined here
  };
  return typings;
};