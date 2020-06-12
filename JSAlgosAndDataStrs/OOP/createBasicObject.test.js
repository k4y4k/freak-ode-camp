const dog = require('./createBasicObject')

describe(`Object Oriented Programming: Create a Basic JavaScript Object`, () => {
  test(`dog should be an object`, () => {
    expect(dog).toBeObject()
  })

  test(`dog should have a name property set to a string.`, () => {
    expect(dog.name).toBeString()
    expect(dog.name.length).toBeGreaterThan(1)
  })

  test(`dog should have a numLegs property set to a number.`, () => {
    expect(dog.numLegs).toBeNumber()
    expect(dog.numLegs).toBeGreaterThan(1)
  })
})
