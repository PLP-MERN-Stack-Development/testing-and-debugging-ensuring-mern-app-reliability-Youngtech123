const logger = require("../../src/middleware/logger");

describe("Logger Middleware", () => {
  it("should call next and log the request", () => {
    const req = { method: "GET", url: "/api/bugs" };
    const res = {};
    const next = jest.fn();
    console.log = jest.fn();

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith("GET /api/bugs");
    expect(next).toHaveBeenCalled();
  });
});
