const app = require("./app");
const request = require("supertest");
describe("index", () => {
  test("use next('route') to skip routes", async () => {
    // apparently the calls to methods like get() are called routes
    const res = await request(app).get("/ab");
    expect(res.text).toEqual("landed here!\n");
  });
});
