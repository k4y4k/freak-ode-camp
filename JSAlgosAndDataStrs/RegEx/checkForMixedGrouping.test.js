const regex = require('./checkForMixedGrouping.js')

describe(`Regular Expressions: Check For Mixed Grouping of Characters`, () => {
  test(`Your regex myRegex should return true for the string Franklin D. Roosevelt`, () => {
    expect('Franklin D. Roosevelt'.match(regex)).toBeTruthy()
  })

  test(`Your regex myRegex should return true for the string Eleanor Roosevelt`, () => {
    expect('Eleanor Roosevelt'.match(regex)).toBeTruthy()
  })

  test(`Your regex myRegex should return false for the string Franklin Rosevelt`, () => {
    expect('Franklin Rosevelt'.match(regex)).toBeFalsy()
  })

  test(`Your regex myRegex should return false for the string Frank Roosevelt`, () => {
    expect('Frank Roosevelt'.match(regex)).toBeFalsy()
  })
})
