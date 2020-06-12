const Dog = require('./defineAConstructorFunction.js')

describe(`Object Oriented Programming: Define a Constructor Function`, () => {
  test(`Dog should have a name property set to a string.`, () => {
    const thisDog = new Dog()
    expect(thisDog.name).toBeTruthy()
    expect(thisDog.name).toBeString()
    expect(thisDog.name.length).toBeGreaterThanOrEqual(1)
  })

  test(`Dog should have a color property set to a string.`, () => {
    const thisDog = new Dog()
    expect(thisDog.color).toBeTruthy()
    expect(thisDog.color).toBeString()
    expect(thisDog.color.length).toBeGreaterThanOrEqual(1)
  })

  test(`Dog should have a numLegs property set to a number.`, () => {
    const thisDog = new Dog()
    expect(thisDog.numLegs).toBeTruthy()
    expect(thisDog.numLegs).toBeNumber()
    expect(thisDog.numLegs).toBeGreaterThanOrEqual(1)
  })
})
