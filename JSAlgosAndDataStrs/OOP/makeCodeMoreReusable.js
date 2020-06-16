const dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs() {
    return `This dog has ${this.numLegs} legs.`
  },
}

module.exports = dog
