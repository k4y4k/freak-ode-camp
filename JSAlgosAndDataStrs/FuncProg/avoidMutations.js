/* eslint-disable prefer-const */

// The global variable
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}

module.exports = { incrementer, fixedValue }
