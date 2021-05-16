const {
  first,
  second,
  nonMutatingPush,
} = require('./addElementsEndOfArrayConcat')

describe('Functional Programming: Add Elements to the End of an Array Using concat Instead of push', () => {
  test('The first array should not change.', () => {
    const firstOrig = [1, 2, 3]

    expect(first).toBeArray()
    expect(first).toStrictEqual(firstOrig)
  })

  test('The second array should not change', () => {
    const secondOrig = [4, 5]

    expect(second).toBeArray()
    expect(second).toStrictEqual(secondOrig)
  })

  test('nonMutatingPush([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].', () => {
    const res = nonMutatingPush([1, 2, 3], [4, 5])

    expect(res).toStrictEqual([1, 2, 3, 4, 5])
  })
})
