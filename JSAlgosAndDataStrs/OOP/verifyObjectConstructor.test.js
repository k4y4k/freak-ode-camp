const { myHouse, houseIsHouse } = require('./verifyObjectConstructor')

describe(`Object Oriented Programming: Verify an Object's Constructor with instanceof`, () => {
  test(`myHouse should have a numBedrooms attribute set to a number.`, () => {
    expect(myHouse.numBedrooms).toBeTruthy()
    expect(myHouse.numBedrooms).toBeNumber()
    expect(myHouse.numBedrooms).toBeGreaterThanOrEqual(1)
  })

  test(`Verify that myHouse is an instance of House using the instanceof operator.`, () => {
    expect(houseIsHouse).toBe(true)
  })
})
