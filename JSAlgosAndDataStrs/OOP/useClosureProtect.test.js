const { Bird } = require('./useClosureProtect.js')

describe(`Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally`, () => {
  test(`The weight property should be a private variable and should be assigned the value of 15.`, () => {
    const testBird = new Bird()

    expect(testBird.weight).toBeUndefined()
  })

  test(`Your code should create a method in Bird called getWeight that returns the value of the private variable weight.`, () => {
    const testBird = new Bird()
    expect(testBird.getWeight()).toBe(15)
  })
})
