const dropElements = require('./dropIt')

describe('Intermediate Algorithm Scripting: Drop it', () => {
  test('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].', () =>
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).toStrictEqual([3, 4]))

  test('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].', () =>
    expect(dropElements([0, 1, 0, 1], n => n === 1)).toStrictEqual([1, 0, 1]))

  test('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].', () =>
    expect(dropElements([1, 2, 3], n => n > 0)).toStrictEqual([1, 2, 3]))

  test('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].', () =>
    expect(dropElements([1, 2, 3, 4], n => n > 5)).toStrictEqual([]))

  test('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].', () =>
    expect(dropElements([1, 2, 3, 7, 4], n => n > 3)).toStrictEqual([7, 4]))

  test('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].', () =>
    expect(dropElements([1, 2, 3, 9, 2], n => n > 2)).toStrictEqual([3, 9, 2]))
})
