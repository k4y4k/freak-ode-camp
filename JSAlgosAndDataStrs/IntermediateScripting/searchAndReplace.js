/*
 * Perform a search and replace on the sentence using the arguments provided and
 * return the new sentence:
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Preserve the case of the first character in the original word when you are
 * replacing it. For example if you mean to replace the word "Book" with the
 * word "dog", it should be replaced as "Dog"
 */

function myReplace(str, before, after) {
  let res = JSON.parse(JSON.stringify(str))
  let replaceWith = JSON.parse(JSON.stringify(after))

  // will capitalise later to match source if need be
  replaceWith = replaceWith.toLowerCase()

  // see whether we should transform to uppercase, otherwise to lowercase
  const transformToUppercase = before.match(/[A-Z]/g)

  if (transformToUppercase) {
    replaceWith = replaceWith[0].toUpperCase() + replaceWith.substring(1)
  }

  res = res.replace(before, replaceWith)

  return res
}

module.exports = myReplace
