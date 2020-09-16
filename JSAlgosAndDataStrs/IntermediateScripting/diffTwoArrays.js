function diffArray(arr1, arr2) {
  let allEl = [...arr1, ...arr2]

  allEl = allEl.filter(el => {
    if (arr1.includes(el) && arr2.includes(el)) return false

    return true
  })

  return allEl
}

module.exports = diffArray
