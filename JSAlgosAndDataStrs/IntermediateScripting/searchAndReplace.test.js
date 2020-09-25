const myReplace = require('./searchAndReplace')

describe('Intermediate Algorithm Scripting: Search and Replace', () => {
  test('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".', () => {
    expect(myReplace('Let us go to the store', 'store', 'mall')).toBe(
      'Let us go to the mall'
    )
  })

  test('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".', () => {
    expect(
      myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
    ).toBe('He is Sitting on the couch')
  })

  test('myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".', () => {
    expect(myReplace('I think we should look up there', 'up', 'Down')).toBe(
      'I think we should look down there'
    )
  })

  test('myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".', () => {
    expect(myReplace('This has a spellngi error', 'spellngi', 'spelling')).toBe(
      'This has a spelling error'
    )
  })

  test('myReplace("His name is Tom", "Tom", "john") should return "His name is John".', () => {
    expect(myReplace('His name is Tom', 'Tom', 'john')).toBe('His name is John')
  })

  test('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".', () => {
    expect(
      myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
    ).toBe('Let us get back to more Algorithms')
  })
})
