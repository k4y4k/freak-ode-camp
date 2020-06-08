const { fixRegex, replaceText } = require('./captureGroupsSearchReplace.js')

describe(`Regular Expressions: Use Capture Groups to Search and Replace`, () => {
  test(`Your regex should change "one two three" to "three two one"`, () => {
    expect('one two three'.replace(fixRegex, replaceText)).toBe('three two one')
  })
})
