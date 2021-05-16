const dog = require('./createAMethodOnAnObject')

describe(`Object Oriented Programming: Create a Method on an Object`, () => {
  test(`dog.sayLegs() should be a function.`, () => {
    expect(dog.sayLegs).toBeFunction()
  })

  test(`dog.sayLegs() should return "This dog has 4 legs."`, () => {
    expect(dog.sayLegs()).toBe('This dog has 4 legs.')
  })
})
