const urlSlug = require('./convertStringsToURLs')

describe('Functional Programming: Apply Functional Programming to Convert Strings to URL Slugs', () => {
  test('urlSlug("Winter Is Coming") should return "winter-is-coming".', () => {
    const res = urlSlug('Winter Is Coming')

    expect(res).toBe('winter-is-coming')
  })

  test('urlSlug(" Winter Is  Coming") should return "winter-is-coming".', () => {
    const res = urlSlug(' Winter Is  Coming')

    expect(res).toBe('winter-is-coming')
  })

  test('urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".', () => {
    const res = urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone')

    expect(res).toBe('a-mind-needs-books-like-a-sword-needs-a-whetstone')
  })

  test('urlSlug("Hold The Door") should return "hold-the-door"', () => {
    const res = urlSlug('Hold The Door')

    expect(res).toBe('hold-the-door')
  })
})
