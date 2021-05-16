const result = require('./findWithLazyMatching')

describe(`Regular Expressions: Find Characters with Lazy Matching`, () => {
  test(`The regex should match "<h1>"`, () => {
    expect(result).toEqual(expect.arrayContaining(['<h1>']))
  })
})
