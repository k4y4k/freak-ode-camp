function mutation(arr) {
  const listOfLetters = arr[1].toLowerCase()
  const wordToCheck = arr[0].toLowerCase()

  for (let i = 0; i < listOfLetters.length; i++) {
    if (wordToCheck.indexOf(listOfLetters[i]) < 0) {
      return false
    }
  }
  return true
}

module.exports = mutation
