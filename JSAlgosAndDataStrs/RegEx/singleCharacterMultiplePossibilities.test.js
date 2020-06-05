const result = require('./singleCharacterMultiplePossibilities.js')

describe(`Regular Expressions: Match Single Character with Multiple Possibilities`, () => {
  test(`You should find all 25 vowels`, () => {
    expect(result.length).toBe(25)
  })

  test(`Your regex should not match any consonants`, () => {
    console.log(result)
    const consonants = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'x',
      'y',
      'z',
    ]

    expect(result).toEqual(expect.not.arrayContaining(consonants))
  })
})
