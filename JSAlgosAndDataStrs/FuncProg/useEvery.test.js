const checkPositive = require('./useEvery')

describe('Functional Programming: Use the every Method to Check that Every Element in an Array Meets a Criteria', () => {
  test('checkPositive([1, 2, 3, -4, 5]) should return false.', () => {
    const res = checkPositive([1, 2, 3, -4])

    expect(res).toBeFalse()
  })

  test('checkPositive([1, 2, 3, 4, 5]) should return true.', () => {
    const res = checkPositive([1, 2, 3, 4, 5])

    expect(res).toBeTrue()
  })

  test('checkPositive([1, -2, 3, -4, 5]) should return false.', () => {
    const res = checkPositive([1, -2, 3, -4, 5])

    expect(res).toBeFalse()
  })
})
