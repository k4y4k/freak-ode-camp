let ohStr = 'Ohhh no'
let ohRegex = /Oh{3,6} no/g
let result = ohRegex.test(ohStr)

module.exports = ohRegex
