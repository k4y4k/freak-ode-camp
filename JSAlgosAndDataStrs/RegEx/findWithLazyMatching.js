const text = '<h1>Winter is coming</h1>'
const myRegex = /<.*?>/gi
const result = text.match(myRegex)

module.exports = result
