const regex = require('./matchWhitespace')

describe(`Regular Expressions: Match Whitespace`, () => {
  test(`Your regex should find eight spaces in "Men are from Mars and women are from Venus."`, () => {
    const string = 'Men are from Mars and women are from Venus.'
    expect(string.match(regex).length).toBe(8)
  })

  test(`Your regex should find three spaces in "Space: the final frontier."`, () => {
    const string = 'Space: the final frontier.'
    expect(string.match(regex).length).toBe(3)
  })

  test(`Your regex should find no spaces in "MindYourPersonalSpace"`, () => {
    expect('MindYourPersonalSpace'.match(regex)).toBe(null)
  })
})
