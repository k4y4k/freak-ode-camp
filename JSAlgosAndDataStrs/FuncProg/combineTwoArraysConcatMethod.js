function nonMutatingConcat(original, attach) {
  return original.concat(attach)
}

const first = [1, 2, 3]
const second = [4, 5]

module.exports = { nonMutatingConcat, first, second }
