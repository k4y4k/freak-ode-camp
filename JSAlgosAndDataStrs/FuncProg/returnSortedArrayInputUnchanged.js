const globalArray = [5, 6, 3, 2, 9]

function nonMutatingSort(arr) {
  let res = [].concat(arr)

  res = res.sort((a, b) => {
    if (a === b) return 0
    if (a > b) return 1

    return -1
  })

  return res
}

nonMutatingSort(globalArray)

module.exports = { globalArray, nonMutatingSort }
