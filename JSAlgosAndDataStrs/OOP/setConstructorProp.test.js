const Dog = require('./setConstructorProp.js')

describe(`Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype`, () => {
  test(`Dog.prototype should set the constructor property.`, () => {
    expect(Dog.prototype).toContainKey('constructor')
  })
})
