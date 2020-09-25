/*
 * Pig Latin is a way of altering English Words. The rules are as follows:
 *
 * - If a word begins with a consonant, take the first consonant or consonant
 *   cluster, move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 */

function translatePigLatin(str) {
  let res = JSON.parse(JSON.stringify(str))

  const firstLetter = res[0].toLowerCase()

  if (
    firstLetter === 'a' ||
    firstLetter === 'e' ||
    firstLetter === 'i' ||
    firstLetter === 'o' ||
    firstLetter === 'u'
  ) {
    // if the first letter is a vowel, append "way" and be done with it
    return `${res}way`
  }

  // if the word begins with consonants, move them to the end and add "ay"
  // group 1: match a group of zero or more charcters that aren't a, e, i, o or u; a consonant
  // group 2: match the rest of the word
  // replace: switch them and append 'ay'

  res = res.replace(/^([^aeiou]*)(.*)/i, '$2$1ay')

  return res
}

module.exports = translatePigLatin
