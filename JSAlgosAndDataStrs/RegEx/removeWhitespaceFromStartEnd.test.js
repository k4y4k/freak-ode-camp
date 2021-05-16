const result = require('./removeWhitespaceFromStartEnd')

describe(`Regular Expressions: Remove Whitespace from Start and End`, () => {
  test(`The resulting string should be "Hello, World!"`, () => {
    expect(result).toBe('Hello, World!')
  })
})
