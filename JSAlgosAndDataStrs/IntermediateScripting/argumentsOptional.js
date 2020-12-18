/*
 * Create a function that sums two arguments together. If only one argument is
 * provided, then return a function that expects one argument and returns the
 * sum.
 *
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should
 * return a function.
 *
 * Calling this returned function with a single argument will then return the
 * sum:
 *
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 *
 * If either argument isn't a valid number, return undefined.
 */

const addTogether = (...numbers) => {
  const allNum = numbers.every(num => typeof num === 'number')

  // Early bailout if both numbers aren't Number type
  if (allNum !== true) return undefined

  // Are there two numbers? Return the sum of both
  // (We've already checked that they're Numbers

  if (numbers.length === 2) {
    return numbers[0] + numbers[1]
  }

  // Is there only one number? Return a function that accepts one argument and
  // returns the later sum
  if (numbers.length === 1)
    return laterNum => {
      // check if the new argument is a Number-type number
      if (typeof laterNum === 'number') return numbers[0] + laterNum

      // if the new argument isn't a Number, return undefined
      return undefined
    }

  // catch-all return of undefined for hilarious situations I haven't thought of
  return undefined
}

module.exports = addTogether
