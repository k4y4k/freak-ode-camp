/* eslint-disable func-names */

/*
 *  Fill in the object constructor with the following methods below:
 *
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 *
 * Run the tests to see the expected output for each method. The methods that
 * take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the
 * object.
 */

const Person = function (firstAndLast) {
  const fullName = firstAndLast.split(' ')

  this.getFirstName = function () {
    return fullName[0]
  }

  this.getLastName = function () {
    // the last name isn't always going to be fullName[1] - middle names?
    return fullName[fullName.length - 1]
  }

  this.getFullName = function () {
    // just do the reverse of splitting lol
    return fullName.join(' ')
  }

  this.setFirstName = function (first) {
    fullName[0] = first
  }

  this.setLastName = function (last) {
    fullName[fullName.length - 1] = last
  }

  this.setFullName = function (incoming) {
    const temp = incoming.split(' ')

    // say we're replacing "Britney Spears" with "Octavia von Seckendorf"
    // using fullName's length would only save "Octavia von"
    // By using the incoming name's length, we leave nothing behind
    for (let i = 0; i < temp.length; i++) {
      fullName[i] = temp[i]
    }
  }
}

module.exports = Person
