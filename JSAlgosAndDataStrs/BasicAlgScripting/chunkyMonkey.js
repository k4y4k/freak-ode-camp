function chunkArrayInGroups(arr, size) {
  const product = []

  for (let i = 0; i < arr.length; i += size) {
    product.push(arr.slice(i, i + size))
  }

  return product
}

module.exports = chunkArrayInGroups
