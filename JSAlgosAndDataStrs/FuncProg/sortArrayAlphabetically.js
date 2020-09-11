/* eslint-disable no-else-return */

function alphabeticalOrder(arr) {
  let result = arr

  result = result.sort((a, b) => {
    if (a === b) {
      // if the letters are the same, there's no need to shuffle them
      return 0
    } else if (a > b) {
      // if the first letter is further along alphabetically,
      // put it after the second
      return 1
    } else {
      // and vice versa
      return -1
    }
  })

  return result
}

alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])

module.exports = alphabeticalOrder
