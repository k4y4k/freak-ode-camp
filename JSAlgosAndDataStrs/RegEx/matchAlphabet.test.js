const result = require('./matchAlphabet')

describe(`Regular Expressions: Match Letters of the Alphabet`, () => {
  test(`Your regex should match 35 items`, () => {
    expect(result.length).toBe(35)
  })
})
