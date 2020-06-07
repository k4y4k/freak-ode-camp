const regex = require('./checkForAllOrNone.js')

describe(`Regular Expressions: Check for All or None`, () => {
  test(`The regex should match "favourite"`, () => {
    expect('favourite'.match(regex)).toEqual(
      expect.arrayContaining(['favourite'])
    )
  })

  test(`The regex should match "favorite"`, () => {
    expect('favorite'.match(regex)).toEqual(
      expect.arrayContaining(['favorite'])
    )
  })

  test(`The regex should not match "fav"`, () => {
    expect('fav'.match(regex)).toBeNull()
  })
})
