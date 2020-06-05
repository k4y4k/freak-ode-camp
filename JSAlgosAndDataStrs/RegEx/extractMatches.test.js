const { codingRegex, result } = require('./extractMatches')

describe(`Regular Expressions: Extract Matches`, () => {
  test(`The result should have the word "coding"`, () => {
    expect(result).toEqual(expect.arrayContaining(['coding']))
  })

  test(`Your regex codingRegex should search for "coding"`, () => {
    expect(codingRegex.test('coding')).toBe(true)
  })
})
