const alphabeticalOrder = require('./sortArrayAlphabetically.js')

describe('Functional Programming: Sort an Array Alphabetically using the sort Method', () => {
  test('alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"]', () => {
    const res = alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])

    expect(res).toStrictEqual(['a', 'a', 'c', 'd', 'g', 'z'])
  })

  test('alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"]', () => {
    const res = alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])

    expect(res).toStrictEqual(['a', 'h', 'm', 'm', 'n', 'x'])
  })

  test('alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].', () => {
    const res = alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])

    expect(res).toStrictEqual(['a', 'a', 'a', 'a', 't', 'x'])
  })
})
