/* eslint-disable no-param-reassign */

/*
 * Find the smallest common multiple of the provided parameters that can be
 * evenly divided by both, as well as by all sequential numbers in the range
 * between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in
 * numerical order.
 *
 * For example, if given 1 and 3, find the smallest common multiple of both 1
 * and 3 that is also evenly divisible by all numbers between 1 and 3. The
 * answer here would be 6.
 */

// according to wikipedia, the Euclidean algorithm is handy in this case
// in simple English:
const euclidean = (m, n) => {
  // Start out with two positive integers m and n.
  let temp
  // 1. If the value of m is less than the value of n, switch the values of m and n
  if (m < n) {
    temp = n
    n = m
    m = temp
  }

  // 2. Find a number r equal to m modulo n
  const r = m % n

  // 3. Let m have the same value as n
  m = n

  // 4. Let n have the same value as r
  n = r

  // 5. If n does not have the value of 0, go to step 2
  if (n !== 0) {
    return euclidean(m, n)
  }

  // 6. The wanted value is in m.
  return m
}

function smallestCommons(arr) {
  const [a, b] = arr
  const range = []

  // generate a range, biggest to smallest
  for (let i = Math.max(a, b); i >= Math.min(a, b); i--) {
    range.push(i)
  }

  // initially, the smallest common multiple will be the first item in our range
  let res = range[0]

  // now, we loop through the rest of the range
  for (let i = 1; i < range.length; i++) {
    const euclideanRes = euclidean(res, range[i])

    // I don't actually get this bit, but sure
    res = (res * range[i]) / euclideanRes
  }
  return res
}

module.exports = smallestCommons
