const movieName = '2001: A Space Odyssey'
const numRegex = /\d/g // Change this line
const result = movieName.match(numRegex).length

module.exports = numRegex
