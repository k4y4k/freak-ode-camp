const uniteUnique = require('./sortedUnion')

describe('Intermediate Algorithm Scripting: Sorted Union', () => {
  test('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual([
      1, 3, 2, 5, 4,
    ])
  })

  test('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', () => {
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual([1, 2, 3, 5])
  })

  test('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].', () => {
    expect(
      uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
    ).toStrictEqual([1, 2, 3, 5, 4, 6, 7, 8])
  })
})
