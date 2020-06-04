const mutation = require("./mutations.js");

describe("Basic Algorithm Scripting: Mutations", () => {
  test(`mutation(["hello", "hey"]) should return false.`, () => {
    expect(mutation(["hello", "hey"])).toBe(false);
  });

  test(`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.`, () => {
    expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
  });

  test(`mutation(["Mary", "Army"]) should return true`, () => {
    expect(mutation(["Mary", "Army"])).toBe(true);
  });

  test(`mutation(["Mary", "Aarmy"]) should return true.`, () => {
    expect(mutation(["Mary", "Aarmy"])).toBe(true);
  });

  test(`mutation(["Alien", "line"]) should return true.`, () => {
    expect(mutation(["Alien", "line"])).toBe(true);
  });

  test(`mutation(["floor", "for"]) should return true.`, () => {
    expect(mutation(["floor", "for"])).toBe(true);
  });

  test(`mutation(["hello", "neo"]) should return false.`, () => {
    expect(mutation(["hello", "neo"])).toBe(false);
  });

  test(`mutation(["voodoo", "no"]) should return false.`, () => {
    expect(mutation(["voodoo", "no"])).toBe(false);
  });

  test(`mutation(["ate", "date"] should return false.)`, () => {
    expect(mutation(["ate", "date"])).toBe(false);
  });

  test(`mutation(["Tiger", "Zebra"]) should return false.`, () => {
    expect(mutation(["Tiger", "Zebra"])).toBe(false);
  });

  test(`mutation(["Noel", "Ole"]) should return true.`, () => {
    expect(mutation(["Noel", "Ole"])).toBe(true);
  });
});
