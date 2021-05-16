const numRegex = require('./matchAllNumbers')

describe(`Regular Expressions: Match All Numbers`, () => {
  test(`Your regex should find 1 digit in "9"`, () => {
    expect('9'.match(numRegex).length).toBe(1)
  })

  test(`Your regex should find 2 digits in "Catch 22".`, () => {
    expect('Catch 22'.match(numRegex).length).toBe(2)
  })

  test(`Your regex should find 3 digits in "101 Dalmatians".`, () => {
    expect('101 Dalmatians'.match(numRegex).length).toBe(3)
  })

  test(`Your regex should find no digits in "One, Two, Three".`, () => {
    const string = 'One, Two, Three'
    expect(string.match(numRegex)).toBe(null)
  })

  test(`Your regex should find 2 digits in "21 Jump Street".`, () => {
    const string = '21 Jump Street'
    expect(string.match(numRegex).length).toBe(2)
  })

  test(`Your regex should find 4 digits in "2001: A Space Odyssey".`, () => {
    expect('2001: A Space Odyssey'.match(numRegex).length).toBe(4)
  })
})
