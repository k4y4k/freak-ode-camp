const destroyer = require('./seekAndDestroy')

describe('Intermediate Algorithm Scripting: Seek and Destroy', () => {
  test('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toStrictEqual([1, 1])
  })

  test('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].', () => {
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toStrictEqual([1, 5, 1])
  })

  test('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].', () => {
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toStrictEqual([1])
  })

  test('destroyer([2, 3, 2, 3], 2, 3) should return [].', () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).toStrictEqual([])
  })

  test('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]', () => {
    expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toStrictEqual([
      'hamburger',
    ])
  })

  test('destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].', () => {
    expect(
      destroyer(
        [
          'possum',
          'trollo',
          12,
          'safari',
          'hotdog',
          92,
          65,
          'grandma',
          'bugati',
          'trojan',
          'yacht',
        ],
        'yacht',
        'possum',
        'trollo',
        'safari',
        'hotdog',
        'grandma',
        'bugati',
        'trojan'
      )
    ).toStrictEqual([12, 92, 65])
  })
})
