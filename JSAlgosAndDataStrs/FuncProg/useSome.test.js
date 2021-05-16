const checkPositive = require('./useSome')

describe('Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria', () => {
  test('checkPositive([1, 2, 3, -4, 5]) should return true', () => {
    const res = checkPositive([1, 2, 3, -4, 5])

    expect(res).toBeTrue()
  })

  test('checkPositive([1, 2, 3, 4, 5]) should return true', () => {
    const res = checkPositive([1, 2, 3, 4, 5])

    expect(res).toBeTrue()
  })

  test('checkPositive([-1, -2, -3, -4, -5]) should return false', () => {
    const res = checkPositive([-1, -2, -3, -4, -5])

    expect(res).toBeFalse()
  })
})
