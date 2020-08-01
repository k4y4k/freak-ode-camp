// The global constiable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
]

function add(list, bookName) {
  const thisBookList = [...list]
  thisBookList.push(bookName)
  return thisBookList
}

function remove(list, bookName) {
  const thisList = [...list]
  return thisList.filter(el => {
    return el !== bookName
  })
}

const newBookList = add(bookList, 'A Brief History of Time')
const newerBookList = remove(
  bookList,
  'On The Electrodynamics of Moving Bodies'
)

const newestBookList = remove(
  add(bookList, 'A Brief History of Time'),
  'On The Electrodynamics of Moving Bodies'
)

module.exports = { bookList, newBookList, newerBookList, newestBookList }
