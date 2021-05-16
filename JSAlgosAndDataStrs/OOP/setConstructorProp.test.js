const Dog = require('./setConstructorProp')

describe(`Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype`, () => {
  test(`Dog.prototype should set the constructor property.`, () => {
    const testDog = new Dog('woof')

    expect(Dog.prototype).toContainKey('constructor')
    expect(testDog.constructor.prototype).toContainKey('constructor')
  })
  test(`Dog.prototype should still contain the eat and describe methods`, () => {
    const testDog = new Dog('woof')

    expect(testDog.eat()).not.toBeNull()
    expect(testDog.describe()).not.toBeNull()
  })
})
