/* eslint-disable no-prototype-builtins */

const { Dog, beagle, result } = require('./understandWhereProtoOriginates.js')

describe(`Object Oriented Programming: Understand Where an Object’s Prototype Comes From`, () => {
  test(`Show that Dog.prototype is the prototype of beagle`, () => {
    expect(Dog.prototype.isPrototypeOf(beagle)).toBe(result)
  })
})
