const request = require("supertest");
const app = require("../src/app");

describe("DevOps Health API", () => {
    test("GET / should return application details", async() => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("DevOps CI/CD Health API");
    });

    test("GET /health should return Healthy", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("Healthy");
    });

    test("GET /info should return system information", async () => {
        const response = await request(app).get("/info");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("hostname");
        expect(response.body).toHaveProperty("platform");
        expect(response.body).toHaveProperty("nodeVersion");
    });
});