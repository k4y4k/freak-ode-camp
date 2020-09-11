function sentensify(str) {
  const delimiter = str.match(/\W/)[0]
  return str.split(delimiter).join(' ')
}

sentensify('May-the-force-be-with-you')

module.exports = sentensify
