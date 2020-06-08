let hello = '   Hello, World!  '
let wsRegex = /\s{2,}/g
let result = hello.replace(wsRegex, '')

module.exports = result
