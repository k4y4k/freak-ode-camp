const rickyAndCal = 'Cal and Ricky both like racing.'
const calRegex = /^Cal/
const result = calRegex.test(rickyAndCal)

module.exports = { calRegex, result }
