const whatIsInAName = require('./whereforeArtThou')

describe('Intermediate Algorithm Scripting: Wherefore art thou', () => {
  test(`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]`, () => {
    const res = whatIsInAName(
      [
        { first: 'Romeo', last: 'Montague' },
        { first: 'Mercutio', last: null },
        { first: 'Tybalt', last: 'Capulet' },
      ],
      { last: 'Capulet' }
    )

    expect(res).toStrictEqual([{ first: 'Tybalt', last: 'Capulet' }])
  })

  test(`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`, () => {
    const res = whatIsInAName(
      [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
      { apple: 1 }
    )

    expect(res).toStrictEqual([
      { apple: 1 },
      { apple: 1 },
      { apple: 1, bat: 2 },
    ])
  })

  test(`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`, () => {
    const res = whatIsInAName(
      [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, bat: 2 }
    )

    expect(res).toStrictEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ])
  })

  test(`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`, () => {
    const res = whatIsInAName(
      [
        { apple: 1, bat: 2 },
        { apple: 1 },
        { apple: 1, bat: 2, cookie: 2 },
        { bat: 2 },
      ],
      { apple: 1, bat: 2 }
    )

    expect(res).toStrictEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ])
  })

  test(`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []`, () => {
    const res = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })

    expect(res).toStrictEqual([])
  })
})
