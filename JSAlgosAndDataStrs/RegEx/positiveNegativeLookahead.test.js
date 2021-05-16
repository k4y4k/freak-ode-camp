const regex = require('./positiveNegativeLookahead')

describe(`Regular Expressions: Positive and Negative Lookahead`, () => {
  test(`The regex should match "abc123"`, () => {
    expect('abc123'.match(regex)).toBeTruthy()
  })

  test(`The regex should match "astr1on11aut"`, () => {
    expect('astr1on11aut'.match(regex)).toBeTruthy()
  })

  test(`The regex should match "bana12"`, () => {})

  test(`The regex should not match "1234"`, () => {
    expect('1234'.match(regex)).toBeNull()
  })

  test(`The regex should not match "12abcde"`, () => {
    expect('12abcde'.match(regex)).toBeNull()
  })

  test(`The regex should not match "8pass99"`, () => {
    expect('8pass99'.match(regex)).toBeNull()
  })

  test(`The regex should not match "astronaut"`, () => {
    expect('astronaut'.match(regex)).toBeNull()
  })

  test(`The regex should not match "banan1"`, () => {
    expect('banan1'.match(regex)).toBeNull()
  })
})
