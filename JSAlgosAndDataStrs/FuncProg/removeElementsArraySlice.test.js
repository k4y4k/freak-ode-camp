const {
  nonMutatingSplice,
  inputCities,
} = require('./removeElementsArraySlice.js')

describe('Functional Programming: Remove Elements from an Array Using slice Instead of splice', () => {
  test('The inputCities array should not change.', () => {
    const inputCitiesOriginal = [
      'Chicago',
      'Delhi',
      'Islamabad',
      'London',
      'Berlin',
    ]

    expect(inputCities).toBeArray()
    expect(inputCities).toStrictEqual(inputCitiesOriginal)
  })

  test('nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) should return ["Chicago", "Delhi", "Islamabad"].', () => {
    const res = nonMutatingSplice([
      'Chicago',
      'Delhi',
      'Islamabad',
      'London',
      'Berlin',
    ])

    expect(res).toBeArray()
    expect(res).toStrictEqual(['Chicago', 'Delhi', 'Islamabad'])
  })
})
