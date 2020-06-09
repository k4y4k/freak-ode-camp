const { exec } = require('child_process')

const arr = []

const openIssues = () => {
  for (let i = 0; i < arr.length; i++) {
    exec(
      `ghi open "${arr[i]}" --claim -L "Basic JavaScript" -M 1`,

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

const issueIds = { from: 122, to: 233 }

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
