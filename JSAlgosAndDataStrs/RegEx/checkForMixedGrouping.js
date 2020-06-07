let myString = 'Eleanor Roosevelt'
let myRegex = /(Franklin|Eleanor)[A-z.\s]+Roosevelt$/g // Change this line
let result = myRegex.test(myString) // Change this line
// After passing the challenge experiment with myString and see how the grouping works

module.exports = myRegex
