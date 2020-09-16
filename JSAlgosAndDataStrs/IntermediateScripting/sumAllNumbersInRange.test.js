const sumAll = require('./sumAllNumbersInRange.js')

describe('Intermediate Algorithm Scripting: Sum All Numbers in a Range', () => {
  test('sumAll([1, 4]) should return a number.', () => {
    expect(sumAll([1, 4])).toBeNumber()
  })

  test('sumAll([1, 4]) should return 10.', () => {
    expect(sumAll([1, 4])).toBe(10)
  })

  test('sumAll([4, 1]) should return 10.', () => {
    expect(sumAll([4, 1])).toBe(10)
  })

  test('sumAll([5, 10]) should return 45.', () => {
    expect(sumAll([5, 10])).toBe(45)
  })

  test('sumAll([10, 5]) should return 45.', () => {
    expect(sumAll([10, 5])).toBe(45)
  })
})
