'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typings', [
      {
        title: 'map, map! (Array)',
        premise: 'range = (1..5)',
        answer: 'range.map{|x| x * 2 }',
        output: '[2, 4, 6, 8, 10]',
        description: 'mapメソッドは、要素の数だけ繰り返しブロックを実行し、ブロックの戻り値を集めた配列を作成して返します。\ncollectメソッドの別名です。',
        author: 'nanashisan',
        language: 'Ruby',
        version: '2.5.0',
        rank: 'silver',
      },
      {
        title: 'zip (Array)',
        premise: 'a = [1, 2, 3]\nb = [4, 5, 6]',
        answer: 'a.zip(b).first',
        output: '[1, 4]',
        description: 'zipメソッドは、配列の要素を引数の配列other_arrayの要素と組み合わせ、配列の配列を作成して返します。',
        author: 'nanashisan',
        language: 'Ruby',
        version: '2.5.0',
        rank: 'silver',
      },
      {
        title: '16進数の書き方',
        answer: '0xDEADBEEF',
        output: '3735928559',
        description: '先頭に0xをつけると16進数の表現になります。10進と同じように計算が可能です。putsすると10進の値が表示されます。',
        author: 'nanashisan',
        language: 'Ruby',
        version: '2.5.0',
        rank: 'silver',
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('typings', null, {});
  }
};