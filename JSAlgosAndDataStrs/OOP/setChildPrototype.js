/* eslint-disable no-console */

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: () => console.log('nom nom nom'),
}

function Dog() {}

Dog.prototype = Object.create(Animal.prototype)

const beagle = new Dog()

module.exports = { Animal, Dog, beagle }
