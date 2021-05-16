const result = require('./matchNumbersAndAlphabet')

describe(`Regular Expressions: Match Numbers and Letters of the Alphabet`, () => {
  test(`Your regex myRegex should match 17 items.`, () => {
    expect(result.length).toBe(17)
  })
})
