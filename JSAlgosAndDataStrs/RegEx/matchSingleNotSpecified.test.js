const result = require('./matchSingleNotSpecified')

describe(`Regular Expressions: Match Single Characters Not Specified`, () => {
  test(`The regex should match 9 items`, () => {
    expect(result.length).toBe(9)
  })
})
