/* eslint-disable no-prototype-builtins */

function Dog(name) {
  this.name = name
}

const beagle = new Dog('Snoopy')

const result = Dog.prototype.isPrototypeOf(beagle)

module.exports = { Dog, beagle, result }
