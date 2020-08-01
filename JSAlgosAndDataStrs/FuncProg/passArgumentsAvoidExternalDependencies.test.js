const {
  fixedValue,
  incrementer,
} = require('./passArgumentsAvoidExternalDependencies.js')

describe(`Functional Programming: Pass Arguments to Avoid External Dependence in a Function`, () => {
  test(`Your function incrementer should not change the value of fixedValue (which is 4).`, () => {
    incrementer(fixedValue)
    expect(fixedValue).toBe(4)
  })

  test(`Your incrementer function should return a value that is one larger than the fixedValue value.`, () => {
    const testValue = 10
    const anotherTestValue = 749
    expect(incrementer(fixedValue)).toBe(5)
    expect(incrementer(testValue)).toBe(testValue + 1)
    expect(incrementer(anotherTestValue)).toBe(anotherTestValue + 1)
  })
})
