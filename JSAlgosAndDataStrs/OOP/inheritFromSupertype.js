/* eslint-disable no-console */

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: () => {
    console.log('nom nom nom')
  },
}

const duck = Object.create(Animal.prototype)

const beagle = Object.create(Animal.prototype)

module.exports = { Animal, duck, beagle }
