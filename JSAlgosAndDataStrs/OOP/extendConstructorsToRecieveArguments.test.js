const { Dog, terrier } = require('./extendConstructorsToRecieveArguments.js')

describe(`Object Oriented Programming: Extend Constructors to Receive Arguments`, () => {
  test(`Dog should receive an argument for name.`, () => {
    const name = 'Barkbark'
    const thisDog = new Dog(name)
    expect(thisDog).toMatchObject({ name })
  })

  test(`Dog should receive an argument for color.`, () => {
    const color = 'copy-paper white'
    const thisDog = new Dog(undefined, color)
    expect(thisDog).toMatchObject({ color })
  })

  test(`Dog should comply with both arguments`, () => {
    const name = 'Barkbark'
    const color = 'copy-paper white'
    const thisDog = new Dog(name, color)
    expect(thisDog).toMatchObject({ name, color })
  })

  test(`Dog should have numLegs set to 4`, () => {
    const thisDog = new Dog()
    expect(thisDog).toMatchObject({ numLegs: 4 })
  })
})
