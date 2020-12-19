const Person = require('./makeAPerson')

describe('Intermediate Algorithm Scripting: Make a Person', () => {
  test('Object.keys(bob).length should return 6.', () => {
    const bob = new Person('Bob Ross')

    expect(Object.keys(bob).length).toBe(6)
  })

  test('bob instanceof Person should return true.', () => {
    const bob = new Person('Bob Ross')

    expect(bob instanceof Person).toBeTruthy()
  })

  test('bob.firstName should return undefined.', () => {
    const bob = new Person('Bob Ross')

    expect(bob.firstName).toBeUndefined()
  })

  test('bob.lastName should return undefined.', () => {
    const bob = new Person('Bob Ross')

    expect(bob.lastName).toBeUndefined()
  })

  test('bob.getFirstName() should return "Bob".', () => {
    const bob = new Person('Bob Ross')

    expect(bob.getFirstName()).toBe('Bob')
  })

  test('bob.getLastName() should return "Ross".', () => {
    const bob = new Person('Bob Ross')

    expect(bob.getLastName()).toBe('Ross')
  })

  test('bob.getFullName() should return "Bob Ross".', () => {
    const bob = new Person('Bob Ross')

    expect(bob.getFullName()).toBe('Bob Ross')
  })

  test('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', () => {
    const bob = new Person('Bob Ross')
    bob.setFirstName('Haskell')

    expect(bob.getFullName()).toBe('Haskell Ross')
  })

  test('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', () => {
    const bob = new Person('Bob Ross')
    bob.setFirstName('Haskell')
    bob.setLastName('Curry')

    expect(bob.getFullName()).toBe('Haskell Curry')
  })

  test('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").', () => {
    const bob = new Person('Bob Ross')
    bob.setFullName('Haskell Curry')

    expect(bob.getFullName()).toBe('Haskell Curry')
  })

  test('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").', () => {
    const bob = new Person('Bob Ross')
    bob.setFullName('Haskell Curry')

    expect(bob.getFirstName()).toBe('Haskell')
  })

  test('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', () => {
    const bob = new Person('Bob Ross')
    bob.setFullName('Haskell Curry')

    expect(bob.getLastName()).toBe('Curry')
  })
})
