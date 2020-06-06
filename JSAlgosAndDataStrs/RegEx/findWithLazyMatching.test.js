const result = require('./findWithLazyMatching.js')

describe(`Regular Expressions: Find Characters with Lazy Matching`, () => {
  test(`The regex should match "<h1>"`, () => {
    expect(result).toEqual(expect.arrayContaining(['<h1>']))
  })
})
