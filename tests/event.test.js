const request = require("supertest");
const app = require("../server");

let server;

beforeAll(() => {
    server = app.listen(5001); // Start server on a test port
});

afterAll(() => {
    server.close(); // Ensure server stops after tests
});

describe("Event API", () => {
    it("should return 401 for unauthorized requests", async () => {
        const res = await request(app).get("/api/events");
        expect(res.statusCode).toBe(401);
    });
});
