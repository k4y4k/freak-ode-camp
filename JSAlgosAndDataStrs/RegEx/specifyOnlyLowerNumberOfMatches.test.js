const regex = require('./specifyOnlyLowerNumberOfMatches.js')

describe(`Regular Expressions: Specify Only the Lower Number of Matches`, () => {
  test(`The regex should not match "Hazzah"`, () => {
    expect('Hazzah'.match(regex)).toBe(null)
  })

  test(`The regex should not match "Hazzzah"`, () => {
    expect('Hazzzah'.match(regex)).toBe(null)
  })

  test(`The regex should match "Hazzzzah"`, () => {
    expect('Hazzzzah'.match(regex)).toStrictEqual(['Hazzzzah'])
  })

  test(`The regex should match "Hazzzzzah"`, () => {
    expect('Hazzzzzah'.match(regex)).toStrictEqual(['Hazzzzzah'])
  })

  test(`The regex should match "Hazzzzzzah"`, () => {
    expect('Hazzzzzzah'.match(regex)).toStrictEqual(['Hazzzzzzah'])
  })

  test(`The regex should match "Hazzah" with 30 z's in it.`, () => {
    const string = 'Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'
    expect(string.match(regex)).toStrictEqual([string])
  })
})
