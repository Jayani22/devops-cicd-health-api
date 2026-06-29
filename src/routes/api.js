const express = require("express");
const getSystemInfo = require("../utils/systemInfo");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        application: "DevOps CI/CD Health API",
        version: "1.0.0",
        status: "Running"
    });
});

router.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        message: "Application is running successfully"
    });
});

router.get("/info", (req, res) => {
    res.json(getSystemInfo());
});

module.exports = router;