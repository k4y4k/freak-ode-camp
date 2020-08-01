/* eslint-disable prefer-const */

// The global variable
let fixedValue = 4

function incrementer(valueToIncrement) {
  return valueToIncrement + 1
}

module.exports = { fixedValue, incrementer }
