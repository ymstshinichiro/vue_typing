'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typings', [
      {
        title: 'map, map! (Array)',
        answer: '(1..5).map{|x| x * 2 }',
        output: '=> [2, 4, 6, 8, 10]',
        description: 'mapメソッドは、要素の数だけ繰り返しブロックを実行し、ブロックの戻り値を集めた配列を作成して返します。collectメソッドの別名です。',
        author: 'nanashisan',
        language: 'Ruby',
        version: '2.5.0',
        rank: 'silver',
      },
      {
        title: 'zip (Array)',
        answer: 'a = [1, 2, 3]; b = [4, 5, 6]; p a.zip(b).first',
        output: '=> [1, 4]',
        description: 'zipメソッドは、配列の要素を引数の配列other_arrayの要素と組み合わせ、配列の配列を作成して返します。',
        author: 'nanashisan',
        language: 'Ruby',
        version: '2.5.0',
        rank: 'silver',
      },
      {
        title: '16進数の加算',
        answer: 's = 0xdeadbeef; s += 1; puts s',
        output: '=> 3735928560',
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