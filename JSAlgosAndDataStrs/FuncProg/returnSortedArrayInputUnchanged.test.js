const {
  globalArray,
  nonMutatingSort,
} = require('./returnSortedArrayInputUnchanged')

describe('Functional Programming: Return a Sorted Array Without Changing the Original Array', () => {
  test('The globalArray variable should not change.', () => {
    const expected = [5, 6, 3, 2, 9]
    expect(globalArray).toStrictEqual(expected)
  })

  test('nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].', () => {
    const res = nonMutatingSort(globalArray)

    expect(res).toStrictEqual([2, 3, 5, 6, 9])
  })
})
