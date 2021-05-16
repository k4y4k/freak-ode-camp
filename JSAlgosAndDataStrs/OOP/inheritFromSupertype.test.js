const { Animal, duck, beagle } = require('./inheritFromSupertype')

describe(`Object Oriented Programming: Inherit Behaviors from a Supertype`, () => {
  test('The duck variable should be defined.', () => expect(duck).toBeTruthy())

  test('The beagle variable should be defined.', () =>
    expect(beagle).toBeTruthy())

  test('duck should have a prototype of Animal.', () =>
    expect(duck instanceof Animal).toBeTruthy())

  test('beagle should have a prototype of Animal.', () =>
    expect(beagle instanceof Animal).toBeTruthy())

  test(`ducks and beagles should both be able to eat()`, () => {
    // console.log() returns undefined

    expect(duck.eat()).toBeUndefined()
    expect(beagle.eat()).toBeUndefined()
  })
})
