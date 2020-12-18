const addTogether = require('./argumentsOptional.js')

describe('Intermediate Algorithm Scripting: Arguments Optional', () => {
  test('addTogether(2, 3) should return 5.', () => {
    expect(addTogether(2, 3)).toBe(5)
  })

  test('addTogether(23, 30) should return 53.', () => {
    expect(addTogether(23, 30)).toBe(53)
  })

  test('addTogether(5)(7) should return 12.', () => {
    expect(addTogether(5)(7)).toBe(12)
  })

  test('addTogether("http://bit.ly/IqT6zt") should return undefined.', () => {
    expect(addTogether('http://bit.ly/IqT6zt')).toBeUndefined()
  })

  test('addTogether(2, "3") should return undefined.', () => {
    expect(addTogether(2, '3')).toBeUndefined()
  })

  test('addTogether(2)([3]) should return undefined.', () => {
    expect(addTogether(2)([3])).toBeUndefined()
  })
})
