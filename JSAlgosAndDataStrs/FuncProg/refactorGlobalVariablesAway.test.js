const {
  bookList,
  newBookList,
  newerBookList,
  newestBookList,
} = require('./refactorGlobalVariablesAway')

describe(`Functional Programming: Refactor Global Variables Out of Functions`, () => {
  test(`bookList should not change.`, () => {
    expect(bookList).toStrictEqual([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
    ])
  })

  test(`newBookList should build on bookList`, () => {
    expect(newBookList).toStrictEqual([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time',
    ])
  })

  test(`newerBookList`, () => {
    expect(newerBookList).toStrictEqual([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
    ])
  })

  test(`newestBookList`, () => {
    expect(newestBookList).toStrictEqual([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time',
    ])
  })
})
