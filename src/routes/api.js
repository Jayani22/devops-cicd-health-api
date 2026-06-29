const express = require("express");
const getSystemInfo = require("../utils/systemInfo");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        application: "DevOps CI/CD Health API",
        version: "1.0.0",
        status: "Running",
        environment: process.env.NODE_ENV || "development"
    });
});

router.get("/health", (req, res) => {
    res.status(200).json({
        status: "Healthy",
        service: "DevOps CI/CD Health API",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

router.get("/info", (req, res) => {
    res.json(getSystemInfo());
});

module.exports = router;