const repeatNum = '42 42 42'
const reRegex = /^(\d+)\s\1\s\1$/g // Change this line
const result = reRegex.test(repeatNum)

module.exports = reRegex
