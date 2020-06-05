let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i;
let result = extractStr.match(codingRegex);

module.exports = { codingRegex, result };
