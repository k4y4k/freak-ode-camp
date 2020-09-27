const fearNotLetter = require('./missingLetters')

describe('Intermediate Algorithm Scripting: Missing Letters', () => {
  test('fearNotLetter("abce") should return "d"', () => {
    expect(fearNotLetter('abce')).toBe('d')
  })

  test('fearNotLetter("abcdefghjklmno") should return "i', () => {
    expect(fearNotLetter('abcdefghjklmno')).toBe('i')
  })

  test('fearNotLetter("stvwx") should return "u"', () => {
    expect(fearNotLetter('stvwx')).toBe('u')
  })

  test('fearNotLetter("bcdf") should return "e"', () => {
    expect(fearNotLetter('bcdf')).toBe('e')
  })

  test('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBeUndefined()
  })
})
