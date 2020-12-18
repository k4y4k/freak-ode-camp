const truthCheck = require('./everythingBeTrue')

describe('Intermediate Algorithm Scripting: Everything Be True', () => {
  test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.', () => {
    const res = truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    )
    expect(res).toBeTruthy()
  })

  test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.', () => {
    const res = truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    )

    expect(res).toBeFalsy()
  })

  test('truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false', () => {
    const res = truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male', age: 0 },
        { user: 'Dipsy', sex: 'male', age: 3 },
        { user: 'Laa-Laa', sex: 'female', age: 5 },
        { user: 'Po', sex: 'female', age: 4 },
      ],
      'age'
    )

    expect(res).toBeFalsy()
  })

  test('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false', () => {
    const res = truthCheck(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true },
        { name: 'FastForward', onBoat: null },
      ],
      'onBoat'
    )

    expect(res).toBeFalsy()
  })

  test('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true', () => {
    const res = truthCheck(
      [
        { name: 'Pete', onBoat: true },
        { name: 'Repeat', onBoat: true, alias: 'Repete' },
        { name: 'FastForward', onBoat: true },
      ],
      'onBoat'
    )

    expect(res).toBeTruthy()
  })

  test('truthCheck([{"single": "yes"}], "single") should return true', () => {
    const res = truthCheck([{ single: 'yes' }], 'single')

    expect(res).toBeTruthy()
  })

  test('truthCheck([{"single": ""}, {"single": "double"}], "single") should return false', () => {
    const res = truthCheck([{ single: '' }, { single: 'double' }], 'single')

    expect(res).toBeFalsy()
  })

  test('truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false', () => {
    const res = truthCheck(
      [{ single: 'double' }, { single: undefined }],
      'single'
    )

    expect(res).toBeFalsy()
  })

  test('truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false', () => {
    const res = truthCheck([{ single: 'double' }, { single: NaN }], 'single')

    expect(res).toBeFalsy()
  })
})
