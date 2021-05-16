const {
  tea4GreenTeamFCC,
  tea4BlackTeamFCC,
} = require('./understandTerminology')

describe(`Functional Programming: Understand Functional Programming Terminology`, () => {
  test(`The tea4GreenTeamFCC variable should hold 27 cups of green tea for the team`, () => {
    expect(tea4GreenTeamFCC.length).toBe(27)
  })

  test(`The tea4GreenTeamFCC variable should hold cups of green tea.`, () => {
    const hasGreenTea = el => el === 'greenTea'

    expect(tea4GreenTeamFCC).toSatisfyAll(hasGreenTea)
  })

  test(`The tea4BlackTeamFCC variable should hold 13 cups of black tea.`, () => {
    expect(tea4BlackTeamFCC.length).toBe(13)
  })

  test(`The tea4BlackTeamFCC variable should hold cups of black tea.`, () => {
    const hasBlackTea = el => el === 'blackTea'

    expect(tea4BlackTeamFCC).toSatisfyAll(hasBlackTea)
  })
})
