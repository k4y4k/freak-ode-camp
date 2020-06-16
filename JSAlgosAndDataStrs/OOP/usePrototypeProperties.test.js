/* eslint-disable no-prototype-builtins */

const beagle = require('./usePrototypeProperties.js')

describe(`Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code`, () => {
  test(`beagle should have a numLegs property.`, () => {
    expect(beagle.numLegs).toBeTruthy()
  })

  test(`beagle.numLegs should be a number.`, () => {
    expect(beagle.numLegs).toBeNumber()
  })

  test(`numLegs should be a prototype property not an own property.`, () => {
    expect(beagle.hasOwnProperty('numLegs')).toBeFalsy()
  })
})
