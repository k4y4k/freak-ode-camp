/* ESLint complains about this for loop, but FCC explicitly forbade Object.keys
 * and explicitly required a call to hasOwnProperty() */

/* eslint-disable no-restricted-syntax, no-prototype-builtins */

function Bird(name) {
  this.name = name
  this.numLegs = 2
}

const canary = new Bird('Tweety')
const ownProps = []

for (const prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop)
  }
}

module.exports = ownProps
