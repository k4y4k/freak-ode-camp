const chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!'
const chewieRegex = /Aa*/
const result = chewieQuote.match(chewieRegex)

module.exports = { chewieRegex, result, chewieQuote }
