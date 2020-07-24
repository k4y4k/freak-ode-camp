/* eslint-disable no-prototype-builtins */

const { Dog, result } = require('./understandPrototypeChain.js')

describe(`Object Oriented Programming: Understand the Prototype Chain`, () => {
  test(`Show that Object.prototype is the prototype of Dog.prototype`, () => {
    expect(Object.prototype.isPrototypeOf(Dog.prototype)).toBeTruthy()
  })
})
