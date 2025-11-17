const Bug = require("../../src/models/Bug");

describe("Bug Model Test", () => {
  it("should create a bug successfully with required fields", async () => {
    const bug = new Bug({ title: "Test bug", description: "Bug description" });
    expect(bug.title).toBe("Test bug");
    expect(bug.description).toBe("Bug description");
    expect(bug.status).toBe("open"); // default value
    expect(bug.priority).toBe("medium"); // default value
  });

  it("should fail without required fields", async () => {
    const bug = new Bug({});
    let err;
    try {
      await bug.validate();
    } catch (error) {
      err = error;
    }
    expect(err).toBeDefined();
    expect(err.errors.title).toBeDefined();
    expect(err.errors.description).toBeDefined();
  });
});
