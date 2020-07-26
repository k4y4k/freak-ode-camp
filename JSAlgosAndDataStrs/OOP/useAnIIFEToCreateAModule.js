/* eslint-disable no-console, no-param-reassign, func-names */

const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true
    },
    singMixin: obj => {
      obj.sing = () => console.log('Singing to an awesome tune')
    },
  }
})()

module.exports = { funModule }
