/*
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  let missingCode
  let lastCode = str.charCodeAt(0)

  for (let i = 1; i < str.length; i++) {
    // if this code is not next in line, we've found our skipped letter
    if (str.charCodeAt(i) !== lastCode + 1) {
      // -1: we've skipped the PRECEDING letter
      missingCode = str.charCodeAt(i) - 1
    }

    lastCode = str.charCodeAt(i)
  }

  if (missingCode !== undefined) {
    missingCode = String.fromCharCode(missingCode)
  }

  return missingCode
}

module.exports = fearNotLetter
