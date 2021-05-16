const { penguin, Bird } = require('./overrideInheritedMethods')

describe(`Override Inherited Methods`, () => {
  test(`penguin.fly() should return the string "Alas, this is a flightless bird."`, () => {
    expect(penguin.fly()).toBe('Alas, this is a flightless bird.')
  })

  test(`The bird.fly() method should return "I am flying!"`, () => {
    const testBird = new Bird()

    expect(testBird.fly()).toBe('I am flying!')
  })
})
