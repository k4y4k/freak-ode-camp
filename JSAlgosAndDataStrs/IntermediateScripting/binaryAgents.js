/*
 * Return an English translated sentence of the passed binary string.
 *
 * The binary string will be space separated.
 */

function binaryAgent(str) {
  const sentence = str.split(' ')
  const res = []

  for (let i = 0; i < sentence.length; i++) {
    let thisChar = sentence[i]

    // convert binary into code point
    thisChar = parseInt(thisChar, 2)

    // push the actual character the code codifies into the results
    res.push(String.fromCharCode(thisChar))
  }

  return res.join('')
}

module.exports = binaryAgent
