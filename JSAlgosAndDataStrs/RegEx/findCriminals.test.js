const findCriminals = require('./findCriminals.js')

describe(`Regular Expressions: Find One or More Criminals in a Hunt`, () => {
  test(`You should find one criminal in "C"`, () => {
    expect('C'.match(findCriminals)).toStrictEqual(['C'])
  })

  test(`You should find two criminals in "CC"`, () => {
    expect('CC'.match(findCriminals)).toStrictEqual(['CC'])
  })

  test(`You should find three criminals in "P1P5P4CCCP2P6P3"`, () => {
    expect('P1P5P4CCCP2P6P3'.match(findCriminals)).toStrictEqual(['CCC'])
  })

  test(`You should find five criminals in "P6P2P7P4P5CCCCCP3P1"`, () => {
    expect('P6P2P7P4P5CCCCCP3P1'.match(findCriminals)).toStrictEqual(['CCCCC'])
  })

  test(`You should find no criminials in ""`, () => {
    expect(''.match(findCriminals)).toStrictEqual(null)
  })

  test(`You should find no criminals in "P1P2P3"`, () => {
    expect('P1P2P3'.match(findCriminals)).toStrictEqual(null)
  })

  test(`You should find 50 criminals in a crowd`, () => {
    const crowd = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'
    expect(crowd.match(findCriminals)).toStrictEqual([
      'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    ])
  })
})
