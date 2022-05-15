require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    serverPort: process.env.PORT || 5000,
    mongoUri: process.env.DATABASE,
};

module.exports = config;
