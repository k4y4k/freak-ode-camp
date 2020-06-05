const { exec } = require('child_process')

const arr = [
  'Using the Test Method',
  'Match Literal Strings',
  'Match a Literal String with Different Possibilities',
  'Ignore Case While Matching',
  'Extract Matches',
  'Find More Than the First Match',
  'Match Anything with Wildcard Period',
  'Match Single Character with Multiple Possibilities',
  'Match Letters of the Alphabet',
  'Match Numbers and Letters of the Alphabet',
  'Match Single Characters Not Specified',
  'Match Characters that Occur One or More Times',
  'Match Characters that Occur Zero or More Times',
  'Find Characters with Lazy Matching',
  'Find One or More Criminals in a Hunt',
  'Match Beginning String Patterns',
  'Match Ending String Patterns',
  'Match All Letters and Numbers',
  'Match Everything But Letters and Numbers',
  'Match All Numbers',
  'Match All Non-Numbers',
  'Restrict Possible Usernames',
  'Match Whitespace',
  'Match Non-Whitespace Characters',
  'Specify Upper and Lower Number of Matches',
  'Specify Only the Lower Number of Matches',
  'Specify Exact Number of Matches',
  'Check for All or None',
  'Positive and Negative Lookahead',
  'Check For Mixed Grouping of Characters',
  'Reuse Patterns Using Capture Groups',
  'Use Capture Groups to Search and Replace',
  'Remove Whitespace from Start and End',
]

for (let i = 0; i < arr.length; i++) {
  exec(`ghi open "${arr[i]}" -M 1`, (err, stout, sterr) => {
    if (err) {
      console.log(err)
      return
    }

    if (sterr) {
      console.log(sterr)
      return
    }
    console.log(stout)
  })
}
