const app = require("./app");
const request = require("supertest");
describe("app", () => {
  test("use next('route') to skip routes", async () => {
    // apparently the calls to methods like get() are called routes
    const res = await request(app).get("/ab");
    expect(res.text).toEqual("undefined,m1-1");
  });
  test("next('route') only skips routes in HTTP verb methods", async () => {
    const res = await request(app).get("/c");
    expect(res.text).toEqual("undefined,m1-1,m1-2,m2-1,m2-2");
  });
});
