/*
 * You will be provided with an initial array (the first argument in the
 * destroyer function), followed by one or more arguments. Remove all elements
 * from the initial array that are of the same value as these arguments.
 */

function destroyer(arr, ...rest) {
  const res = arr.filter(el => {
    // if the element is in rest, yeet it
    return !rest.includes(el)
  })

  return res
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

module.exports = destroyer
