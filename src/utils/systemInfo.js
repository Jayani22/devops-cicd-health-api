const os = require("os");

function getSystemInfo() {
    return {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
        freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
        uptime: `${Math.floor(os.uptime())} seconds`,
        nodeVersion: process.version,
        timestamp: new Date().toISOString()
    };
}

module.exports = getSystemInfo;