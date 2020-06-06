let { result, chewieQuote, chewieRegex } = require('./matchZeroOrMoreTimes.js')

describe(`Regular Expressions: Match Characters that Occur Zero or More Times`, () => {
  test(`Your regex should match "A" in chewieQuote`, () => {
    expect(result).toEqual(
      expect.arrayContaining([expect.stringMatching(/^A/)])
    )
  })

  test(`Your regex should match "Aaaaaaaaaaaaaaaa" in chewieQuote.`, () => {
    // No global flag, so we get the weird smorgasboard
    expect(result[0]).toBe('Aaaaaaaaaaaaaaaa')
  })

  test(`Your regex chewieRegex should match 16 characters in chewieQuote.`, () => {
    expect(result[0].length).toBe(16)
  })

  test(`Your regex should not match any characters in "He made a fair move. Screaming about it can't help you."`, () => {
    expect(
      "He made a fair move. Screaming about it can't help you".match(
        chewieRegex
      )
    ).toStrictEqual(null)
  })

  test(`Your regex should not match any characters in "Let him have it. It's not wise to upset a Wookiee."`, () => {
    expect(
      "Let him have it. It's not wise to upset a Wookiee.".match(chewieQuote)
    ).toStrictEqual(null)
  })
})
