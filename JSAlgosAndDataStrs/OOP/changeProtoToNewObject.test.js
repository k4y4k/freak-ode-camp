/* eslint-disable no-console */

const Dog = require('./changeProtoToNewObject.js')

describe(`Object Oriented Programming: Change the Prototype to a New Object`, () => {
  test(`Dog.prototype should be set to a new object`, () => {
    const newProtoObj = {
      numLegs: 4,
      eat: () => console.log('CHOMP'),
      describe: () => console.log(`Woof! (My name is ${this.name}!)`),
    }

    expect(JSON.stringify(Dog.prototype)).toStrictEqual(
      JSON.stringify(newProtoObj)
    )
  })

  test(`Dog.prototype should have the property numLegs`, () => {
    const newDog = new Dog('Doggo')

    expect(Dog.prototype.numLegs).toBeTruthy()
    expect(Dog.prototype.numLegs).toBeNumber()
    expect(newDog.numLegs).toBe(4)
  })

  test(`Dog.prototype should have the method eat()`, () => {
    const newDog = new Dog('Doggo')

    expect(Dog.prototype.eat).toBeTruthy()
    expect(Dog.prototype.eat).toBeFunction()
    expect(newDog.eat()).toBe(console.log('CHOMP'))
  })

  test(`Dog.prototype should have the method describe()`, () => {
    const newDog = new Dog('Doggo')

    expect(Dog.prototype.describe).toBeTruthy()
    expect(Dog.prototype.describe).toBeFunction()
    expect(newDog.describe()).toBe(console.log(`Woof! (My name is Doggo!)`))
  })
})
