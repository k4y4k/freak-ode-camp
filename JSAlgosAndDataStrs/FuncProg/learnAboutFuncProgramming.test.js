const tea4TeamFCC = require('./learnAboutFuncProgramming')

describe(`Functional Programming: Learn About Functional Programming`, () => {
  test(`The tea4TeamFCC variable should hold 40 cups of tea for the team.`, () => {
    expect(tea4TeamFCC.length).toBe(40)
  })

  test(`The tea4TeamFCC variable should hold cups of green tea.`, () => {
    const hasGreenTea = el => el === 'greenTea'
    expect(tea4TeamFCC).toSatisfyAll(hasGreenTea)
  })
})
