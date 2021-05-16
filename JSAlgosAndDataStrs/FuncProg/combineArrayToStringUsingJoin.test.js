const sentensify = require('./combineArrayToStringUsingJoin')

describe('Functional Programming: Combine an Array into a String Using the join Method', () => {
  test('sentensify("May-the-force-be-with-you") should return a string.', () => {
    const res = sentensify('May-the-force-be-with-you')

    expect(res).toBeString()
  })

  test('sentensify("May-the-force-be-with-you") should return "May the force be with you".', () => {
    const res = sentensify('May-the-force-be-with-you')
    expect(res).toStrictEqual('May the force be with you')
  })

  test('sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".', () => {
    const res = sentensify('The.force.is.strong.with.this.one')

    expect(res).toStrictEqual('The force is strong with this one')
  })

  test('sentensify("There,has,been,an,awakening") should return "There has been an awakening".', () => {
    const res = sentensify('There,has,been,an,awakening')

    expect(res).toStrictEqual('There has been an awakening')
  })
})
