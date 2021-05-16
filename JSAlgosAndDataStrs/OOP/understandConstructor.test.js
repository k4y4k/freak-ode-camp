const {
  Dog,
  joinDogFraternity,
  patti,
  barkbark,
} = require('./understandConstructor')

describe(`Object Oriented Programming: Understand the Constructor Property`, () => {
  test(`joinDogFraternity should be a function`, () => {
    expect(joinDogFraternity).toBeFunction()
  })

  test(`joinDogFraternity should return true if candidate is an instance of Dog`, () => {
    expect(patti.constructor === Dog).toBeTruthy()
    expect(joinDogFraternity(patti)).toBeTruthy()
    expect(joinDogFraternity(barkbark)).toBeFalsy()
  })
})
