/* eslint-disable camelcase */

const { new_s } = require('./implementMapOnAPrototype.js')

describe('Functional Programming: Implement map on a Prototype', () => {
  test('new_s should equal [46, 130, 196, 10].', () => {
    expect(new_s).toBeArray()
    expect(new_s).toStrictEqual([46, 130, 196, 10])
  })
})
