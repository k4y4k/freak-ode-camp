/* eslint-disable no-extend-native,func-names,camelcase */

const s = [23, 65, 98, 5]

Array.prototype.myFilter = function (callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i])
    }
  }

  return newArray
}

const new_s = s.myFilter(function (item) {
  return item % 2 === 1
})

module.exports = { new_s }
