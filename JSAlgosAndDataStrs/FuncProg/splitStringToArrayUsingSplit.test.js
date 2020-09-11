const splitify = require('./splitStringToArrayUsingSplit.js')

describe('Functional Programming: Split a String into an Array Using the split Method', () => {
  test('splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].', () => {
    const res = splitify('Hello World,I-am code')

    expect(res).toStrictEqual(['Hello', 'World', 'I', 'am', 'code'])
  })

  test('splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].', () => {
    const res = splitify('Earth-is-our home')

    expect(res).toStrictEqual(['Earth', 'is', 'our', 'home'])
  })

  test('splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].', () => {
    const res = splitify('This.is.a-sentence')

    expect(res).toStrictEqual(['This', 'is', 'a', 'sentence'])
  })
})
