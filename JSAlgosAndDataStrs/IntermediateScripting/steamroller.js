/*
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
  // wrap the input in an array
  const res = [].concat(...arr)

  // are there any nested arrays?
  if (res.some(Array.isArray)) {
    // yes? iron them out
    return steamrollArray(res)
  }
  // no? epic, we've found the value we want
  return res
}

module.exports = steamrollArray
