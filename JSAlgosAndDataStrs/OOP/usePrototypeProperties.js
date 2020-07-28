function Dog(name) {
  this.name = name
}

Dog.prototype.numLegs = 2

// Only change code above this line
const beagle = new Dog('Snoopy')

module.exports = beagle
