const add = require('./curryingIntro.js')

describe('Functional Programming: Introduction to Currying and Partial Application', () => {
  test('add(10)(20)(30) should return 60', () => {
    const res = add(10)(20)(30)

    expect(res).toBe(60)
  })

  test('add(1)(2)(3) should return 6', () => {
    const res = add(1)(2)(3)

    expect(res).toBe(6)
  })

  test('add(11)(22)(33) should return 66', () => {
    const res = add(11)(22)(33)

    expect(res).toBe(66)
  })
})
