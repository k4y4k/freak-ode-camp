/*
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * plus the sum of all the numbers between them. The lowest number will not
 * always come first.
 */

function sumAll(arr) {
  // bail if there's not exactly two numbers
  if (arr.length !== 2) return new Error('Exactly 2 numbers should be passed')

  // find what to sum - the question is asking for the sum of the bounds + the
  // sum of the inner range, but that's computationally the same as summing
  // every number from the lower bound to the upper bound anyway
  const bounds = arr.sort((a, b) => a - b)

  // sum it
  let total = 0
  for (let i = bounds[0]; i < bounds[1] + 1; i++) {
    total += i
  }

  return total
}

module.exports = sumAll
