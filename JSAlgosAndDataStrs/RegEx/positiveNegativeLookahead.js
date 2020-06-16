const sampleWord = 'astronaut'
// let pwRegex = /^(?!\d)\w*(?=\d{2})\w*/g
// ^ start of string
//  (
//   ?!                      don't match if we find
//     \d                    numbers
//       )
//        \w                 any word or number or underscore
//          *                zero or more times
//           (
//            ?=             please find
//              \d           any digit
//                {2}        exactly 2 times
//                   )
//                    \w     any letter or number or underscore
//                      * 0+ times

// turns out that works but it's not right, so
const pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/

const result = pwRegex.test(sampleWord)

module.exports = pwRegex
