const { bird, boat, glideMixin } = require('./useAMixin.js')

describe(`Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects`, () => {
  test(`Your code should declare a glideMixin variable that is a function.`, () => {
    expect(glideMixin).toBeFunction()
  })

  test(`Your code should use the glideMixin on the bird object to give it the glide method.`, () => {
    expect(bird.glide).not.toBeUndefined()
    expect(bird.glide).toBeFunction()
  })

  test(`Your code should use the glideMixin on the boat object to give it the glide method.`, () => {
    expect(boat.glide).not.toBeUndefined()
    expect(bird.glide).toBeFunction()
  })
})
