const session = require("supertest-session");

const app = require("../index");

const agent = session(app);

describe("testing endpoints", () => {
  describe("GET /game", () => {
    it("should create a new game", () => {
      agent.get("/game").expect(200);
    });
  });

  describe("GET /game/:id", () => {
    it("should bring an error message", () => {
      agent.get("/game/5").expect(404);
    });
  });
});
