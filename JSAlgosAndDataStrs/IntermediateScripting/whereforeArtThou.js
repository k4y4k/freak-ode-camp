/* eslint-disable no-prototype-builtins */

/*
 * Make a function that looks through an array of objects (first argument) and
 * returns an array of all objects that have matching name and value pairs
 * (second argument). Each name and value pair of the source object has to be
 * present in the object from the collection if it is to be included in the
 * returned array.
 */

function whatIsInAName(collection, source) {
  const res = [...collection]

  // get list of things we're looking for
  const lookingFor = Object.keys(source)

  // filter res
  return res.filter(el => {
    // we want every item in the object to have ONE OR MORE of the keys and its
    // associated value: not every object should have every key/value pair, but
    // every object should have at least one pair if we want to keep it.
    return lookingFor.every(key => {
      return el.hasOwnProperty(key) && el[key] === source[key]
    })
  })
}

module.exports = whatIsInAName
