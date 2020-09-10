const { inputAnim, sliceArray } = require('./returnPartOfArrayUsingSlice.js')

describe('Functional Programming: Return Part of an Array Using the slice Method', () => {
  test('The inputAnim variable should not change.', () => {
    const inputAnimOrig = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant']

    expect(inputAnim).toBeArray()
    expect(inputAnim).toStrictEqual(inputAnimOrig)
  })

  test('sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].', () => {
    const res = sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)

    expect(res).toBeArray()
    expect(res).toStrictEqual(['Dog', 'Tiger'])
  })

  test('sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].', () => {
    const res = sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)

    expect(res).toBeArray()
    expect(res).toStrictEqual(['Cat'])
  })

  test('sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].', () => {
    const res = sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)
    expect(res).toBeArray()
    expect(res).toStrictEqual(['Dog', 'Tiger', 'Zebra'])
  })
})
