const steamrollArray = require('./steamroller')

describe('Intermediate Algorithm Scripting: Steamroller', () => {
  test('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].', () =>
    expect(steamrollArray([[['a']], [['b']]])).toStrictEqual(['a', 'b']))

  test('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].', () =>
    expect(steamrollArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]))

  test('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].', () =>
    expect(steamrollArray([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4]))

  test('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].', () =>
    expect(steamrollArray([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4]))
})
