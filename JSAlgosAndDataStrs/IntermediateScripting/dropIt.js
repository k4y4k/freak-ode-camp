/*
 * Given the array arr, iterate through and remove each element starting from
 * the first element (the 0 index) until the function func returns true when
 * the iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied, otherwise,
 * arr should be returned as an empty array.
 */

function dropElements(arr, func) {
  const resultingArr = [...arr]

  // for arrays that shrink to nothing (i.e. with no elements that match), the
  // for loop runs out of loops. By storing this at the beginning, we can avoid
  // such an event
  const initialLength = resultingArr.length

  for (let i = 0; i < initialLength; i++) {
    if (!func(resultingArr[0])) {
      resultingArr.shift()
    } else {
      break
    }
  }

  return resultingArr
}

module.exports = dropElements
