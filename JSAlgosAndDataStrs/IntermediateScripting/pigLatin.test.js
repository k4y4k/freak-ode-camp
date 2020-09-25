const translatePigLatin = require('./pigLatin')

describe('Intermediate Algorithm Scripting: Pig Latin', () => {
  test('translatePigLatin("california") should return "aliforniacay".', () => {
    expect(translatePigLatin('california')).toBe('aliforniacay')
  })

  test('translatePigLatin("paragraphs") should return "aragraphspay".', () => {
    expect(translatePigLatin('paragraphs')).toBe('aragraphspay')
  })

  test('translatePigLatin("glove") should return "oveglay".', () => {
    expect(translatePigLatin('glove')).toBe('oveglay')
  })

  test('translatePigLatin("algorithm") should return "algorithmway".', () => {
    expect(translatePigLatin('algorithm')).toBe('algorithmway')
  })

  test('translatePigLatin("eight") should return "eightway".', () => {
    expect(translatePigLatin('eight')).toBe('eightway')
  })

  test('Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".', () => {
    expect(translatePigLatin('schwartz')).toBe('artzschway')
  })

  test('Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".', () => {
    expect(translatePigLatin('rhythm')).toBe('rhythmay')
  })
})
