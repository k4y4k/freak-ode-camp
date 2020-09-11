// return a new array consisting of only the positive integers when an array of real numbers is passed in

const squareList = arr => {
  let newArr = arr

  // discard negative numbers
  newArr = newArr
    .filter(number => number >= 0)
    // discard decimals
    .filter(number => number % 1 === 0)
    // square everything
    .map(number => number * number)

  return newArr
}

module.exports = { squareList }
