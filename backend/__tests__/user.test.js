const request = require("supertest");
const app = require("../server");

test("GET /api/user returns user", async () => {
  const res = await request(app).get("/api/user");
  expect(res.body.name).toBe("Soma");
});
