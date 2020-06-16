const quoteSample = '3 blind mice.'
const myRegex = /[^0-9aeiou]/gi // Change this line
const result = quoteSample.match(myRegex) // Change this line

module.exports = result
