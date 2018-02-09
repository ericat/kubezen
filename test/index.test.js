const app = require("../app");
const request = require("supertest");
const assert = require("assert");

describe("Api", () => {
  it("displays some JSON", () => {
    request(app)
      .get("/")
      .then(res => {
        assert.equal(res.status, 200);
      });
  });
});
