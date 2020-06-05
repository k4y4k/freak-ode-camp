const { regex } = require('./wildcard.js')

describe(`Regular Expressions: Match Anything with Wildcard Period`, () => {
  test(`The regex should match "run" in "Let us go on a run."`, () => {
    expect('Let us go on a run.'.match(regex)).toEqual(
      expect.arrayContaining(['run'])
    )
  })

  test(`The regex should match "sun" in "The sun is out today."`, () => {
    expect('The sun is out today'.match(regex)).toEqual(
      expect.arrayContaining(['sun'])
    )
  })

  test(`The regex should match "fun" in "Coding is a lot of fun."`, () => {
    expect('Coding is a lot of fun'.match(regex)).toEqual(
      expect.arrayContaining(['fun'])
    )
  })

  test(`The regex should match "pun" in "Seven days without a pun makes one weak."`, () => {
    expect('Seven days without a pun makes one weak'.match(regex)).toEqual(
      expect.arrayContaining(['pun'])
    )
  })

  test(`The regex should match "nun" in "One takes a vow to be a nun."`, () => {
    expect('One takes a vow to be a nun'.match(regex)).toEqual(
      expect.arrayContaining(['nun'])
    )
  })

  test(`The regex should match "bun" in "She got fired from the hot dog stand for putting her hair in a bun."`, () => {
    expect(
      'She got fired from the hot dog stand for putting her hair in a bun'.match(
        regex
      )
    ).toEqual(expect.arrayContaining(['bun']))
  })

  test(`The regex should not match "There is a bug in my code."`, () => {
    expect('There is a bug in my code'.match(regex)).toStrictEqual(null)
    expect('There is a bug in my code'.match(regex)).not.toEqual(
      expect.arrayContaining(['bug'])
    )
  })

  test(`The regex should not match "Catch me if you can."`, () => {
    expect('Catch me if you can'.match(regex)).toStrictEqual(null)
  })
})
