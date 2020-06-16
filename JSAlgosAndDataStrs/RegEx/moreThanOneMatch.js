const twinkleStar = 'Twinkle, twinkle, little star'
const starRegex = /twinkle/gi
const result = twinkleStar.match(starRegex)

module.exports = { starRegex, result }
