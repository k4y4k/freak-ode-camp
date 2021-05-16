const regex = require('./specifyExactNumberOfMatches')

describe(`Regular Expressions: Specify Exact Number of Matches`, () => {
  test(`The regex should not match "Timber"`, () => {
    const string = 'Timber'
    expect(string.match(regex)).toBe(null)
  })

  test(`The regex should not match "Timmber"`, () => {
    const string = 'Timmber'
    expect(string.match(regex)).toBe(null)
  })

  test(`The regex should not match "Timmmber"`, () => {
    const string = 'Timmmber'
    expect(string.match(regex)).toBe(null)
  })

  test(`The regex should not match "Timber" with 30 m's in it.`, () => {
    const string = `Ti${'m'.repeat(30)}ber`
    expect(string.match(regex)).toBe(null)
  })

  test(`The regex should match "Timmmmber"`, () => {
    const string = 'Timmmmber'

    expect(string.match(regex)).toEqual(expect.arrayContaining([string]))
  })
})
