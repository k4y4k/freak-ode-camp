/* eslint-disable no-prototype-builtins */

const { Animal, Bear, Cat } = require('./useInheritance.js')

describe(`Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself`, () => {
  test('Animal.prototype should have the eat property.', () => {
    const testAnimal = new Animal('Eoy')

    expect(Animal.prototype).toContainKey('eat')
    // console.log returns `undefined`
    expect(testAnimal.eat()).toBeUndefined()
  })

  test('Bear.prototype should not have the eat property.', () => {
    const testBear = new Bear('Beary')

    expect(Bear.prototype).not.toContainKey('eat')
    expect(testBear.hasOwnProperty('eat')).toBeFalsy()
  })

  test('Cat.prototype should not have the eat property.', () => {
    const testCat = new Cat('Yaw')

    expect(Cat.prototype).not.toContainKey('eat')
    expect(testCat.hasOwnProperty('eat')).toBeFalsy()
  })
})
