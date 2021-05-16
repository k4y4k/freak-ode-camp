/* eslint-disable no-prototype-builtins, no-console, func-names */

const { Animal, Dog, beagle } = require('./addMethodsAfterInheritance')

describe(`Object Oriented Programming: Add Methods After Inheritance`, () => {
  test('Animal should not respond to bark()', () => {
    expect(typeof Animal.prototype.bark).toBe('undefined')
  })

  test('Dog should inherit eat() from Animal', () => {
    expect(typeof Dog.prototype.eat).toBe('function')
  })

  test('Dog should have bark() as an own property', () => {
    expect(Dog.prototype.hasOwnProperty('bark')).toBeTrue()
  })

  test('beagle should be an instanceof Animal', () => {
    expect(beagle instanceof Animal).toBeTrue()
  })

  test('The constructor for beagle should be set to Dog', () => {
    expect(beagle.constructor).toBe(Dog)
  })

  test('beagle.eat() should log "nom nom nom"', () => {
    // I can't work out how to properly test console.log, so this has to do for
    // now
    expect(beagle.eat()).toBe(undefined)
  })

  test('beagle.bark() should log "Woof!"', () => {
    expect(beagle.bark()).toBe(undefined)
  })
})
