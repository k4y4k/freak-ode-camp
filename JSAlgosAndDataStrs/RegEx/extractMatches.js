const extractStr = "Extract the word 'coding' from this string."
const codingRegex = /coding/i
const result = extractStr.match(codingRegex)

module.exports = { codingRegex, result }
