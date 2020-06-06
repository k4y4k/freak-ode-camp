let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!'
let chewieRegex = /Aa*/
let result = chewieQuote.match(chewieRegex)

module.exports = { chewieRegex, result, chewieQuote }
