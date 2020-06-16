const movieName = '2001: A Space Odyssey'
const noNumRegex = /\D/g // Change this line
const result = movieName.match(noNumRegex).length

module.exports = noNumRegex
