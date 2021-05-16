const result = require('./testMethod')

describe(`Regular Expressions: Using the Test Method`, () => {
  test(`Your result should return true`, () => {
    expect(result).toBe(true)
  })
})
