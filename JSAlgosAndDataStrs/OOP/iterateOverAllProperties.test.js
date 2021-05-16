const { ownProps, prototypeProps } = require('./iterateOverAllProperties')

describe(`Object Oriented Programming: Iterate Over All Properties`, () => {
  test(`The ownProps array should include "name"`, () => {
    const expected = ['name']
    expect(ownProps).toIncludeAnyMembers(expected)
  })

  test(`The prototypeProps array should include "numLegs".`, () => {
    const expected = ['numLegs']
    expect(prototypeProps).toIncludeAnyMembers(expected)
  })
})
