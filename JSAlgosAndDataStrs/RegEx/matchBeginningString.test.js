const { calRegex, result } = require('./matchBeginningString')

describe(`Regular Expressions: Match Beginning String Patterns`, () => {
  test(`Your regex should search for "Cal" with a capital letter`, () => {
    expect('Cal'.match(calRegex)).toEqual(expect.arrayContaining(['Cal']))
  })

  test(`Your regex should match "Cal" at the beginning of the string.`, () => {
    expect(result).toBe(true)
  })

  test(`Your regex should not match "Cal" in the middle of a string.`, () => {
    const string = 'This is a string with Cal in the middle'
    expect(string.match(calRegex)).toBe(null)
  })
})
