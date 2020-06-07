let username = 'JackOfAllTrades'
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i
// ^ start of pattern
//  [a-z] match any letter (not using \w because we were specifically told to allow only alphanumeric)
//       (
//        [a-z] any letter
//             + once or more
//              \d any digit
//                * zeroce (? lol) or more
//                 | OR
//                  \d any digit
//                   {2, } twice or more
//                        )
//                         $ end of the string

let result = userCheck.test(username)

module.exports = userCheck
