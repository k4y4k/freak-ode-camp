const result = require("./matchLiteralStrings");

describe(`Regular Expressions: Match Literal Strings`, () => {
  test("The regex should find 'Waldo'", () => {
    expect(result).toBe(true);
  });
});
