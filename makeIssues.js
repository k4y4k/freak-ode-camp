/* eslint-disable */

const { exec } = require('child_process')

const arr = [
  'Introduction to Basic Algorithm Scripting',
  'Convert Celsius to Fahrenheit',
  'Reverse a String',
  'Factorialize a Number',
  'Find the Longest Word in a String',
  'Return Largest Numbers in Arrays',
  'Confirm the Ending',
  'Repeat a String Repeat a String',
  'Truncate a String',
  'Finders Keepers',
  'Boo who',
  'Title Case a Sentence',
  'Slice and Splice',
  'Falsy Bouncer',
  'Where do I Belong',
  'Mutations',
  'Chunky Monkey',
]

const openIssues = () => {
  for (let i = 0; i < arr.length; i++) {
    exec(
      `ghi open "${arr[i]}" --claim -L "Basic Algorithm Scripting" -M 1`,

      (err, stout, sterr) => {
        if (err) {
          console.log(err)
          return
        }

        if (sterr) {
          console.log(sterr)
          return
        }
        console.log(stout)
      }
    )
  }
}

// openIssues()

const issueIds = { from: 234, to: 314 }

const closeIssues = () => {
  // generate closing commit message - GitHub can process the closures on their
  // end, instead of ratelimiting me.
  let message = ''

  for (let i = issueIds.from; i < issueIds.to; i++) {
    message += `closes #${i}, `
  }

  // and, because I care about grammar (but not commit message conventions apparently)
  message += `and closes #${issueIds.to}.`

  console.log(message)
}

closeIssues()
