function checkPositive(arr) {
  return arr.some(el => el >= 0)
}

checkPositive([1, 2, 3, -4, 5])

module.exports = checkPositive
