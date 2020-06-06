const result = require('./matchOneOrMoreTimes.js')

describe(`Regular Expressions: Match Characters that Occur One or More Times`, () => {
  test(`The regex should match 2 items`, () => {
    expect(result.length).toBe(2)
  })

  test(`The regex should match "ss" twice`, () => {
    expect(result).toStrictEqual(['ss', 'ss'])
  })
})
