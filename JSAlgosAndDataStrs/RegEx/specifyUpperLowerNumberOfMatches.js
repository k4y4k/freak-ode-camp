const ohStr = 'Ohhh no'
const ohRegex = /Oh{3,6} no/g
const result = ohRegex.test(ohStr)

module.exports = ohRegex
