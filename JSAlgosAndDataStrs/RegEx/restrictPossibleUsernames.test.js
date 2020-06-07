const regex = require('./restrictPossibleUsernames.js')

describe(`Regular Expressions: Restrict Possible Usernames`, () => {
  test(`The regex should match JACK`, () => {
    expect('JACK'.match(regex).length).toBeGreaterThanOrEqual(1)
  })

  test(`The regex should match Jo`, () => {
    expect('Jo'.match(regex).length).toBeGreaterThanOrEqual(1)
  })

  test(`The regex should match Oceans11`, () => {
    expect('Oceans11'.match(regex).length).toBeGreaterThanOrEqual(1)
  })

  test(`The regex should match RegexGuru`, () => {
    expect('RegexGuru'.match(regex).length).toBeGreaterThanOrEqual(1)
  })

  test(`The regex should match Z97`, () => {
    expect('Z97'.match(regex).length).toBeGreaterThanOrEqual(1)
  })

  test(`The regex should not match 007`, () => {
    expect('007'.match(regex)).toBe(null)
  })

  test(`The regex should not match 9`, () => {
    expect('9'.match(regex)).toBe(null)
  })

  test(`The regex should not match A1`, () => {
    expect('A1'.match(regex)).toBe(null)
  })

  test(`The regex should not match BadUs3rnam3`, () => {
    expect('BadUs3rnam3'.match(regex)).toBe(null)
  })

  test(`The regex should not match c57bT3`, () => {
    expect('c57bT3'.match(regex)).toBe(null)
  })

  test(`The regex should not match J`, () => {
    expect('J'.match(regex)).toBe(null)
  })
})
