const hello = '   Hello, World!  '
const wsRegex = /\s{2,}/g
const result = hello.replace(wsRegex, '')

module.exports = result
