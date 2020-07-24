/* eslint-disable no-prototype-builtins */

function Dog(name) {
  this.name = name
}

const beagle = new Dog('Snoopy')

Dog.prototype.isPrototypeOf(beagle)

const result = Object.prototype.isPrototypeOf(Dog.prototype)

module.exports = { Dog, result }
