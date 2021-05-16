const regex = require('./matchAllNonNumbers')

describe(`Regular Expressions: Match All Non-Numbers`, () => {
  test(`Your regex should find no non-digits in "9".`, () => {
    const string = '9'
    expect(string.match(regex)).toBe(null)
  })

  test(`Your regex should find 6 non-digits in "Catch 22".`, () => {
    const string = 'Catch 22'
    expect(string.match(regex).length).toBe(6)
  })

  test(`Your regex should find 11 non-digits in "101 Dalmatians".`, () => {
    const string = '101 Dalmatians'
    expect(string.match(regex).length).toBe(11)
  })

  test(`Your regex should find 15 non-digits in "One, Two, Three".`, () => {
    const string = 'One, Two, Three'
    expect(string.match(regex).length).toBe(15)
  })

  test(`Your regex should find 12 non-digits in "21 Jump Street".`, () => {
    const string = '21 Jump Street'
    expect(string.match(regex).length).toBe(12)
  })

  test(`Your regex should find 17 non-digits in "2001: A Space Odyssey".`, () => {
    const string = '2001: A Space Odyssey'
    expect(string.match(regex).length).toBe(17)
  })
})
