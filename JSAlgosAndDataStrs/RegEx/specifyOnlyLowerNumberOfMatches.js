const haStr = 'Hazzzzah'
const haRegex = /Haz{4,}ah/g
const result = haRegex.test(haStr)

module.exports = haRegex
