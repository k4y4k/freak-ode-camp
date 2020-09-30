const smallestCommons = require('./smallestCommonMultiple')

describe('Intermediate Algorithm Scripting: Smallest Common Multiple', () => {
  test('smallestCommons([1, 5]) should return a number.', () =>
    expect(smallestCommons([1, 5])).toBeNumber())

  test('smallestCommons([1, 5]) should return 60.', () =>
    expect(smallestCommons([1, 5])).toBe(60))

  test('smallestCommons([5, 1]) should return 60.', () =>
    expect(smallestCommons([5, 1])).toBe(60))

  test('smallestCommons([2, 10]) should return 2520.', () =>
    expect(smallestCommons([2, 10])).toBe(2520))

  test('smallestCommons([1, 13]) should return 360360.', () =>
    expect(smallestCommons([1, 13])).toBe(360360))

  test('smallestCommons([23, 18]) should return 6056820.', () =>
    expect(smallestCommons([23, 18])).toBe(6056820))
})
