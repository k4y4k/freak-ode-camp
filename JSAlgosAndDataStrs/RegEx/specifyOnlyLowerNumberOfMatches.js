let haStr = 'Hazzzzah'
let haRegex = /Haz{4,}ah/g
let result = haRegex.test(haStr)

module.exports = haRegex
