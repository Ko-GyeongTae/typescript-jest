const matchers = require("jest-extended");
expect.extend(matchers);

import supertest from "supertest";
import { initApp } from "../app";

const app = initApp();

describe("GET Method 테스트", () => {
  test("/test 라우터 호출", async () => {
    const request = supertest(app);
    const { status, body } = await request.get("/test");
    expect(status).toBe(200);
  });
});
