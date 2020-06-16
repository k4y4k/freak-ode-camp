const quoteSample = 'The five boxing wizards jump quickly.'
const nonAlphabetRegex = /\W/g
const result = quoteSample.match(nonAlphabetRegex).length

module.exports = nonAlphabetRegex
