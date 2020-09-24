/*
 * Convert a string to spinal case. Spinal case is
 * all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  let res = str

  // split by capital letters
  res = res.replace(/[A-Z]/g, ' $&')

  // replace spaces or underscores with hyphens
  res = res.replace(/\s|_/g, '-')

  // delete hyphens at the beginning
  res = res.replace(/^-/g, '')

  // remove double (or more) hyphens
  res = res.replace(/-{2,}/g, '-')

  return res.toLowerCase()
}

module.exports = spinalCase
