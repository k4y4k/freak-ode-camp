const finalTabs = require('./understandImperativeHazards')

describe(`Functional Programming: Understand the Hazards of Using Imperative Code`, () => {
  test(`finalTabs.tabs should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`, () => {
    expect(finalTabs.tabs).toStrictEqual([
      'FB',
      'Gitter',
      'Reddit',
      'Twitter',
      'Medium',
      'new tab',
      'Netflix',
      'YouTube',
      'Vine',
      'GMail',
      'Work mail',
      'Docs',
      'freeCodeCamp',
      'new tab',
    ])
  })
})
