const lastRegex = require('./matchEndingString')

describe(`Regular Expressions: Match Ending String Patterns`, () => {
  test(`You should match "caboose" at the end of the string`, () => {
    const string = 'The last car on a train is the caboose'

    expect(string.match(lastRegex)).toEqual(expect.arrayContaining(['caboose']))
  })
})
