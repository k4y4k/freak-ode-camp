const sumFibs = require('./sumAllOddFibonacciNumbers')

describe('Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers', () => {
  test('sumFibs(1) should return a number.', () => {
    expect(sumFibs(1)).toBeNumber()
  })

  test('sumFibs(1000) should return 1785.', () => {
    expect(sumFibs(1000)).toBe(1785)
  })

  test('sumFibs(4000000) should return 4613732.', () => {
    expect(sumFibs(4000000)).toBe(4613732)
  })

  test('sumFibs(4) should return 5.', () => {
    expect(sumFibs(4)).toBe(5)
  })

  test('sumFibs(75024) should return 60696.', () => {
    expect(sumFibs(75024)).toBe(60696)
  })

  test('sumFibs(75025) should return 135721.', () => {
    expect(sumFibs(75025)).toBe(135721)
  })
})
