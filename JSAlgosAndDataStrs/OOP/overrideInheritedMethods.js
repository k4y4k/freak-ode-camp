/* eslint-disable no-console */

function Bird() {}

Bird.prototype.fly = () => 'I am flying!'

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype)
Penguin.prototype.constructor = Penguin

Penguin.prototype.fly = () => 'Alas, this is a flightless bird.'

const penguin = new Penguin()
console.log(penguin.fly())

module.exports = { penguin, Bird }
