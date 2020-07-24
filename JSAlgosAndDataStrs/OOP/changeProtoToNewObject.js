/* eslint-disable no-console */
function Dog(name) {
  this.name = name
}

Dog.prototype = {
  numLegs: 4,
  eat: () => {
    console.log('CHOMP')
  },
  describe: () => {
    console.log(`Woof! (My name is ${this.name}!)`)
  },
}

module.exports = Dog
