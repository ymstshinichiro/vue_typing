'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typings', [{
        title: 'map, map! (Array)',
        answer: '(1..5).map{|x| x * 2 }',
        output: '=> [2, 4, 6, 8, 10]',
        description: 'mapメソッドは、要素の数だけ繰り返しブロックを実行し、ブロックの戻り値を集めた配列を作成して返します。collectメソッドの別名です。',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('typings', null, {});
  }
};