function Dog(name) {
  this.name = name
}

const patti = new Dog('Patti-Chan')
const barkbark = 'Barkbark'

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog
}

module.exports = { Dog, joinDogFraternity, patti, barkbark }
