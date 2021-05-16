const { funModule } = require('./useAnIIFEToCreateAModule')

describe(`Object Oriented Programming: Use an IIFE to Create a Module`, () => {
  test(`funModule should be defined and return an object.`, () => {
    expect(funModule).toBeObject()
  })

  test(`funModule.isCuteMixin should access a function.`, () => {
    expect(funModule.isCuteMixin).toBeFunction()
  })

  test(`funModule.singMixin should access a function.`, () => {
    expect(funModule.singMixin).toBeFunction()
  })
})
