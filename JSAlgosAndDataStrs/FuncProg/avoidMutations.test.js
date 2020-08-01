const { fixedValue, incrementer } = require('./avoidMutations.js')

describe(`Functional Programming: Avoid Mutations and Side Effects Using Functional Programming`, () => {
  test(`incrementer() should not change the value of fixedValue (which is 4).`, () => {
    incrementer()
    expect(fixedValue).toBe(4)
  })

  test(`Your incrementer function should return a value that is one larger than the fixedValue value.`, () => {
    expect(incrementer()).toBe(5)
  })
})
