const { Animal, Dog, beagle } = require('./setChildPrototype.js')

describe(`Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent`, () => {
  test(`Dog.prototype should be an instance of Animal`, () => {
    expect(Dog.prototype instanceof Animal).toBeTruthy()
  })

  test(`Dog inherits eat() from Animal`, () => {
    expect(Dog.prototype.eat).toBeTruthy()
  })

  test(`beagle can eat()`, () => {
    expect(beagle.eat).toBeTruthy()
    expect(beagle.eat()).toBeUndefined()
  })
})
