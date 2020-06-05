const { starRegex, result } = require('./moreThanOneMatch')

describe(`Regular Expressions: Find More Than the First Match`, () => {
  test(`Your match should match both occurrences of the word "Twinkle"`, () => {
    const expectedResult = ['Twinkle', 'twinkle']
    expect(result).toEqual(expect.arrayContaining(expectedResult))
  })

  test(`Your match result should have two elements in it.`, () => {
    expect(result.length).toBe(2)
  })
})
