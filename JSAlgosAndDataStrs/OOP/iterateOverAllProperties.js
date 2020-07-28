/* eslint-disable no-prototype-builtins, no-restricted-syntax */

function Dog(name) {
  this.name = name
}

Dog.prototype.numLegs = 4

const beagle = new Dog('Snoopy')

const ownProps = []
const prototypeProps = []

for (const prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop)
  } else {
    prototypeProps.push(prop)
  }
}

module.exports = { ownProps, prototypeProps }
