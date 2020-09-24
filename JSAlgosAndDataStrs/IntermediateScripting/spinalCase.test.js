const spinalCase = require('./spinalCase')

describe('Intermediate Algorithm Scripting: Spinal Tap Case', () => {
  test('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"', () => {
    expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap')
  })

  test('spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"', () => {
    expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap')
  })

  test('spinalCase("The_Andy_Griffith_Show") should returun "the-andy-griffith-show"', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show')
  })

  test('spinalCase("Teletubbies say eh-oh") should return "teletubbies-say-eh-oh"', () => {
    expect(spinalCase('Teletubbies say eh-oh')).toBe('teletubbies-say-eh-oh')
  })
  test('spinalCase("AllThe-small Things") should return "all-the-small-things"', () => {
    expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things')
  })
})
