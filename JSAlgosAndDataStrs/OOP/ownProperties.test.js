const ownProps = require('./ownProperties')

describe(`Object Oriented Programming: Understand Own Properties`, () => {
  test(`ownProps should include the values "numLegs" and "name".`, () => {
    const expected = ['numLegs', 'name']
    expect(ownProps).toIncludeAllMembers(expected)
  })
})
