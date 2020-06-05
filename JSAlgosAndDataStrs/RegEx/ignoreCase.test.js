const regex = require("./ignoreCase");

describe(`Regular Expressions: Ignore Case While Matching`, () => {
  test(`Regex should match freeCodeCamp`, () => {
    expect(regex.test("freeCodeCamp")).toBe(true);
  });

  test(`Regex should match FreeCodeCamp`, () => {
    expect(regex.test("FreeCodeCamp")).toBe(true);
  });

  test(`Regex should match FreecodeCamp`, () => {
    expect(regex.test("FreecodeCamp")).toBe(true);
  });

  test(`Regex should match FreeCodecamp`, () => {
    expect(regex.test("FreeCodecamp")).toBe(true);
  });

  test(`Regex should match FreeCOdeCamp`, () => {
    expect(regex.test("FreeCOdeCamp")).toBe(true);
  });

  test(`Regex should match FrEeCoDeCamp`, () => {
    expect(regex.test("FrEeCoDeCamp")).toBe(true);
  });

  test(`Regex should match FrEeCodECamp`, () => {
    expect(regex.test("FrEeCodECamp")).toBe(true);
  });

  test(`Regex should match FReeCodeCAmp`, () => {
    expect(regex.test("FReeCodeCAmp")).toBe(true);
  });

  test(`Regex should not match FCC`, () => {
    expect(regex.test("FCC")).toBe(false);
  });

  test(`Regex should not match Free Code Camp`, () => {
    expect(regex.test("Free Code Camp")).toBe(false);
  });
});
