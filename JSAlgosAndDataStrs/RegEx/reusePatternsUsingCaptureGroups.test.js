const regex = require('./reusePatternsUsingCaptureGroups.js')

describe(`Regular Expressions: Reuse Patterns Using Capture Groups`, () => {
  test(`Your regex should match "10 10 10"`, () => {
    expect('10 10 10'.match(regex)).toBeTruthy()
  })

  test(`Your regex should match "100 100 100"`, () => {
    expect('100 100 100'.match(regex)).toBeTruthy()
  })

  test(`Your regex should match "42 42 42"`, () => {
    expect('42 42 42'.match(regex)).toBeTruthy()
  })

  test(`Your regex should not match "1 2 3"`, () => {
    expect('1 2 3'.match(regex)).toBeNull()
  })

  test(`Your regex should not match "101 102 103"`, () => {
    expect('101 102 103'.match(regex)).toBeNull()
  })

  test(`Your regex should not match "42 42 42 42"`, () => {
    expect('42 42 42 42'.match(regex)).toBeNull()
  })

  test(`Your regex should not match "42 42"`, () => {
    expect('42 42'.match(regex)).toBeNull()
  })
})
