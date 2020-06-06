const nonAlphabetRegex = require('./matchAllButLettersAndNumbers.js')

describe(`Regular Expressions: Match Everything But Letters and Numbers`, () => {
  test(`The regex should find 6 non-alphanumeric characters in "The five boxing wizards jump quickly."`, () => {
    const string = 'The five boxing wizards jump quickly.'
    expect(string.match(nonAlphabetRegex).length).toBe(6)
  })

  test(`The regex should find 8 non-alphanumeric characters in "Pack my box with five dozen liquor jugs."`, () => {
    const string = 'Pack my box with five dozen liquor jugs.'
    expect(string.match(nonAlphabetRegex).length).toBe(8)
  })

  test(`The regex should find 6 non-alphanumeric characters in "How vexingly quick daft zebras jump!"`, () => {
    const string = 'How vexingly quick daft zebras jump!'
    expect(string.match(nonAlphabetRegex).length).toBe(6)
  })

  test(`The regex should find 12 non-alphanumeric characters in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`, () => {
    const string = '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'
    expect(string.match(nonAlphabetRegex).length).toBe(12)
  })
})
