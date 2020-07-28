const ownProps = require('./ownProperties.js')

describe(`Object Oriented Programming: Understand Own Properties`, () => {
  test(`ownProps should include the values "numLegs" and "name".`, () => {
    const expected = ['numLegs', 'name']
    expect(ownProps).toIncludeAllMembers(expected)
  })
})
