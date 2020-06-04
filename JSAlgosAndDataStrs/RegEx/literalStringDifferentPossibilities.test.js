const regex = require("./literalStringDifferentPossibilities");

describe(`Regular Expressions: Match a Literal String with Different Possibilities`, () => {
  test(`The regex should return true for "John has a pet dog."`, () => {
    expect(regex.test("John has a pet dog")).toBe(true);
  });

  test(`The regex should return false for "Emma has a pet rock."`, () => {
    expect(regex.test("Emma has a pet rock.")).toBe(false);
  });

  test(`The regex should return true for "Emma has a pet bird."`, () => {
    expect(regex.test("Emma has a pet bird.")).toBe(true);
  });

  test(`The regex should return true for "Liz has a pet cat."`, () => {
    expect(regex.test("Liz has a pet cat.")).toBe(true);
  });

  test(`The regex should return false for "Kara has a pet dolphin."`, () => {
    expect(regex.test("Kara has a pet dolphin.")).toBe(false);
  });

  test(`The regex should return true for "Alice has a pet fish."`, () => {
    expect(regex.test("Alice has a pet fish.")).toBe(true);
  });

  test(`The regex should return false for "Jimmy has a pet computer."`, () => {
    expect(regex.test("Jimmy has a pet computer.")).toBe(false);
  });
});
