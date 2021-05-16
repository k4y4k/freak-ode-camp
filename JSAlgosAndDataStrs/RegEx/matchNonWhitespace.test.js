const regex = require('./matchNonWhitespace')

describe(`Regular Expressions: Match Non-Whitespace Characters`, () => {
  test(`Your regex should find 35 non-spaces in "Men are from Mars and women are from Venus."`, () => {
    const string = 'Men are from Mars and women are from Venus.'
    expect(string.match(regex).length).toBe(35)
  })

  test(`Your regex should find 23 non-spaces in "Space: the final frontier."`, () => {
    const string = 'Space: the final frontier.'
    expect(string.match(regex).length).toBe(23)
  })

  test(`Your regex should find 21 non-spaces in "MindYourPersonalSpace"`, () => {
    expect('MindYourPersonalSpace'.match(regex).length).toBe(21)
  })
})
