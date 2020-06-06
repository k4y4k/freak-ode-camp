const regex = require('./matchAllLettersAndNumbers.js')

describe(`Regular Expressions: Match All Letters and Numbers`, () => {
  test(`The regex should find 31 alphanumeric characters in "The five boxing wizards jump quickly."`, () => {
    const string = 'The five boxing wizards jump quickly.'
    expect(string.match(regex).length).toBe(31)
  })

  test(`The regex should find 32 alphanumeric characters in "Pack my box with five dozen liquor jugs."`, () => {
    const string = 'Pack my box with five dozen liquor jugs.'
    expect(string.match(regex).length).toBe(32)
  })

  test(`The regex should find 30 alphanumeric characters in "How vexingly quick daft zebras jump!"`, () => {
    const string = 'How vexingly quick daft zebras jump!'
    expect(string.match(regex).length).toBe(30)
  })

  test(`The regex should find 36 alphanumeric characters in "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."`, () => {
    const string = '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'
    expect(string.match(regex).length).toBe(36)
  })
})
