const sumPrimes = require('./sumAllPrimes')

describe('Intermediate Algorithm Scripting: Sum All Primes', () => {
  test('sumPrimes(10) should return a number.', () =>
    expect(sumPrimes(10)).toBeNumber())

  test('sumPrimes(10) should return 17', () => expect(sumPrimes(10)).toBe(17))

  test('sumPrimes(977) should return 73156', () =>
    expect(sumPrimes(977)).toBe(73156))
})
