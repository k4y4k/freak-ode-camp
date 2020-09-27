/*
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  let res = str

  res = res.replace(/'/gi, '&apos;')
  res = res.replace(/</gi, '&lt;')
  res = res.replace(/>/gi, '&gt;')
  res = res.replace(/"/gi, '&quot;')

  // require a space after the ampersand, otherwise will replace previous
  // escape codes
  res = res.replace(/& /gi, '&amp; ')

  return res
}

module.exports = convertHTML
