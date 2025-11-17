const { validateBugTitle } = require("../../src/helpers/validateBug");

describe("validateBugTitle helper", () => {
  it("returns false for empty or whitespace title", () => {
    expect(validateBugTitle("")).toBe(false);
    expect(validateBugTitle("   ")).toBe(false);
  });

  it("returns false for titles shorter than 3 characters", () => {
    expect(validateBugTitle("ab")).toBe(false);
  });

  it("returns true for valid titles", () => {
    expect(validateBugTitle("Bug in login")).toBe(true);
  });
});
