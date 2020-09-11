function checkPositive(arr) {
  return arr.every(item => item >= 1)
}

checkPositive([1, 2, 3, -4, 5])

module.exports = checkPositive
