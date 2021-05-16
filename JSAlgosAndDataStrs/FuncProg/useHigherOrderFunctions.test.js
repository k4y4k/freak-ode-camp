const { squareList } = require('./useHigherOrderFunctions')

describe('Functional Programming: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem', () => {
  test('squareList should be a function', () => {
    expect(squareList).toBeFunction()
  })

  test('squareList should return an array.', () => {
    const res = squareList([2, -2])
    expect(res).toBeArray()
  })

  test('squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].', () => {
    const res = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
    expect(res).toStrictEqual([16, 1764, 36])
  })

  test('squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49].', () => {
    const res = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])
    expect(res).toStrictEqual([9, 100, 49])
  })
})
