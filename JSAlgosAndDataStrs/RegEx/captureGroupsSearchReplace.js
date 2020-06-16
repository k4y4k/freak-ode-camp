const str = 'one two three'
const fixRegex = /(\w+)\s(\w+)\s(\w+)/ // Change this line
const replaceText = '$3 $2 $1' // Change this line
const result = str.replace(fixRegex, replaceText)

module.exports = { fixRegex, replaceText }
