const request = require("supertest");
const app = require("../../server"); // your Express app
const Bug = require("../../src/models/Bug");

describe("Bug Routes Integration Test", () => {
  let bugId;

  beforeEach(async () => {
    const bug = await Bug.create({ title: "Integration bug", description: "Test bug description" });
    bugId = bug._id;
  });

  afterEach(async () => {
    await Bug.deleteMany();
  });

  it("GET /api/bugs - should return all bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("PUT /api/bugs/:id - should update a bug", async () => {
    const res = await request(app)
      .put(`/api/bugs/${bugId}`)
      .send({ status: "in-progress" });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("in-progress");
  });

  it("DELETE /api/bugs/:id - should delete a bug", async () => {
    const res = await request(app).delete(`/api/bugs/${bugId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bug deleted successfully");
  });
});
