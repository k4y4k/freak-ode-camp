const regex = require('./specifyUpperLowerNumberOfMatches.js')

describe(`Regular Expressions: Specify Upper and Lower Number of Matches`, () => {
  test(`Your regex should not match "Ohh no"`, () => {
    expect('Ohh no'.match(regex)).toBe(null)
  })

  test(`Your regex should match "Ohhh no"`, () => {
    expect('Ohhh no'.match(regex).length).toBe(1)
  })

  test(`Your regex should match "Ohhhh no"`, () => {
    expect('Ohhhh no'.match(regex).length).toBe(1)
  })

  test(`Your regex should match "Ohhhhh no"`, () => {
    expect('Ohhhhh no'.match(regex).length).toBe(1)
  })

  test(`Your regex should match "Ohhhhhh no"`, () => {
    expect('Ohhhhhh no'.match(regex).length).toBe(1)
  })

  test(`Your regex should not match "Ohhhhhhh no"`, () => {
    expect('Ohhhhhhh no'.match(regex)).toBe(null)
  })
})
