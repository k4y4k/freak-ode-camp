const {
  nonMutatingConcat,
  first,
  second,
} = require('./combineTwoArraysConcatMethod.js')

describe('Functional Programming: Combine Two Arrays Using the concat Method', () => {
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

  test('nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].', () => {
    const res = nonMutatingConcat([1, 2, 3], [4, 5])

    expect(res).toBeArray()
    expect(res).toStrictEqual([1, 2, 3, 4, 5])
  })
})
