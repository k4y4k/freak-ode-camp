const { hound, Dog } = require('./useAConstructorFunction.js')

describe(`Object Oriented Programming: Use a Constructor to Create Objects`, () => {
  test(`hound should be created using the Dog constructor.`, () => {
    expect(hound).toStrictEqual(new Dog())
  })
})
