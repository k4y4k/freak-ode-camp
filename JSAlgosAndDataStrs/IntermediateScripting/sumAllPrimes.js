/*
 * A prime number is a whole number greater than 1 with exactly two divisors:
 * 1 and itself. For example, 2 is a prime number because it is only divisible
 * by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 *
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less
 * than or equal to num.
 */

function sumPrimes(num) {
  const sieve = []
  const primes = []

  for (let i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)

      for (let j = i * 2; j <= num; j += i) {
        sieve[j] = true
      }
    }
  }

  const res = primes.reduce((acc, curVal) => acc + curVal, 0)

  return res
}

module.exports = sumPrimes
