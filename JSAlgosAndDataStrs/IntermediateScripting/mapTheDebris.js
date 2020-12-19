/*
 * Return a new array that transforms the elements' average altitude into their
 * orbital periods (in seconds).
 *
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 *
 * The values should be rounded to the nearest whole number. The body being
 * orbited is Earth.
 *
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth
 * is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  const res = []

  arr.forEach(el => {
    const { avgAlt } = el

    // the formula for finding the orbital period is:
    // x = 2 * pi * sqrt(a³ / GM)

    const a = earthRadius + avgAlt
    let orbital = 2 * Math.PI * Math.sqrt(a ** 3 / GM)

    // round the orbital period
    orbital = Math.round(orbital)

    // push the new object to the result
    res.push({ name: el.name, orbitalPeriod: orbital })
  })

  return res
}

module.exports = orbitalPeriod
