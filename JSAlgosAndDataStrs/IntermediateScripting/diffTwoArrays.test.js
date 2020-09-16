const diffArray = require('./diffTwoArrays')

describe('Intermediate Algorithm Scripting: Diff Two Arrays', () => {
  test('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toBeArray()
  })

  test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]', () => {
    expect(
      diffArray(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toIncludeAnyMembers(['pink wool'])
  })

  test('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item', () => {
    expect(
      diffArray(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      ).length
    ).toBe(1)
  })

  test('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]', () => {
    expect(
      diffArray(
        ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toIncludeAnyMembers(['diorite', 'pink wool'])
  })

  test('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.', () => {
    expect(
      diffArray(
        ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      ).length
    ).toBe(2)
  })

  test('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return []', () => {
    expect(
      diffArray(
        ['andesite', 'grass', 'dirt', 'dead shrub'],
        ['andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toStrictEqual([])
  })

  test('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
  })

  test('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.', () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length).toBe(1)
  })

  test('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].', () => {
    expect(
      diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])
    ).toIncludeAnyMembers(['piglet', 4])
  })

  test('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.', () => {
    expect(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length).toBe(
      2
    )
  })

  test('[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].', () => {
    expect(
      diffArray([], ['snuffleupagus', 'cookie monster', 'elmo'])
    ).toIncludeAnyMembers(['snuffleupagus', 'cookie monster', 'elmo'])
  })

  test('[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.', () => {
    expect(
      diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length
    ).toBe(3)
  })

  test('[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].', () => {
    expect(
      diffArray([1, 'calf', 3, 'piglet'], [7, 'filly'])
    ).toIncludeAnyMembers([1, 'calf', 3, 'piglet', 7, 'filly'])
  })

  test('[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.', () => {
    expect(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length).toBe(6)
  })
})
