const {
  Animal,
  Bird,
  Dog,
  duck,
  beagle,
} = require('./resetInheritedProperty.js')

describe(`Object Oriented Programming: Reset an Inherited Constructor Property`, () => {
  test(`Bird.prototype should be an instance of Animal.`, () => {
    expect(Bird.prototype instanceof Animal).toBe(true)
  })

  test(`duck.constructor should return Bird`, () => {
    expect(duck.constructor).toBe(Bird)
  })

  test(`Dog.prototype should be an instance of Animal`, () => {
    expect(Dog.prototype instanceof Animal).toBe(true)
  })
  test(`beagle.constructor should return Dog`, () => {
    expect(beagle.constructor).toBe(Dog)
  })
})
