const chunkArrayInGroups = require('./chunkyMonkey.js')

describe(`Basic Algorithm Scripting: Chunky Monkey`, () => {
  test(`chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].`, () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toStrictEqual([
      ['a', 'b'],
      ['c', 'd'],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toStrictEqual([
      [0, 1, 2],
      [3, 4, 5],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toStrictEqual([
      [0, 1],
      [2, 3],
      [4, 5],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toStrictEqual([
      [0, 1, 2, 3],
      [4, 5],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8],
    ])
  })

  test(`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].`, () => {
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8],
    ])
  })
})
