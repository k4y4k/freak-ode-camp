function urlSlug(title) {
  const res = title
    .split(' ')

    // filter out any empty "words"
    .filter(word => word.length !== 0)

    // join it all together again
    .join('-')
    .toLowerCase()

  // delete any double hyphens

  return res
}

module.exports = urlSlug
