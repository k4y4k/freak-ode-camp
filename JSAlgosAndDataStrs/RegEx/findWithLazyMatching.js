let text = '<h1>Winter is coming</h1>'
let myRegex = /<.*?>/gi
let result = text.match(myRegex)

module.exports = result
