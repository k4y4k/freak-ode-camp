/* eslint-disable no-console */

const { logName, logLegs, dog } = require('./useDotNotationAccessObjectProps')

describe(`Object Oriented Programming: Use Dot Notation to Access the Properties of an Object`, () => {
  test(`Your code should use console.log to print the value for the name property of the dog object.`, () => {
    expect(logName).toBe(console.log(dog.name))
  })

  test(`Your code should use console.log to print the value for the numLegs property of the dog object.`, () => {
    expect(logLegs).toBe(console.log(dog.legs))
  })
})
