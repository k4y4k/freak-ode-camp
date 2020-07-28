function House(numBedrooms) {
  this.numBedrooms = numBedrooms
}

const myHouse = new House(1)
const houseIsHouse = myHouse instanceof House

module.exports = { myHouse, houseIsHouse }
