/* eslint-disable no-param-reassign */

const bird = {
  name: 'Donald',
  numLegs: 2,
}

const boat = {
  name: 'Warrior',
  type: 'race-boat',
}

const glideMixin = obj => {
  obj.glide = () => "I'm glidin'"
}

glideMixin(bird)
glideMixin(boat)

module.exports = { bird, boat, glideMixin }
