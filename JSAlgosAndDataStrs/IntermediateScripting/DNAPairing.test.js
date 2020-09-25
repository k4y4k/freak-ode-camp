const pairElement = require('./DNAPairing')

describe('Intermediate Algorithm Scripting: DNA Pairing', () => {
  test(`pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].`, () => {
    expect(pairElement('ATCGA')).toStrictEqual([
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ])
  })

  test(`pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].`, () => {
    expect(pairElement('TTGAG')).toStrictEqual([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ])
  })

  test(`pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].`, () => {
    expect(pairElement('CTCTA')).toStrictEqual([
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ])
  })
})
