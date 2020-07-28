const sample = 'Whitespace is important in separating words'
const countNonWhiteSpace = /\S/g // Change this line
const result = sample.match(countNonWhiteSpace)

module.exports = countNonWhiteSpace
