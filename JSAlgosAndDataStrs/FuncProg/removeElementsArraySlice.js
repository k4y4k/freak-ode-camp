function nonMutatingSplice(cities) {
  const res = cities.slice(0, 3)

  return res
}
const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin']

module.exports = { nonMutatingSplice, inputCities }
