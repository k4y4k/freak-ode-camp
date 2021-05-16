const dog = require('./makeCodeMoreReusable')

describe(`Object Oriented Programming: Make Code More Reusable with the this Keyword`, () => {
  test(`dog.sayLegs() should return "This dog has 4 legs."`, () => {
    expect(dog.sayLegs()).toBe('This dog has 4 legs.')
  })
})
