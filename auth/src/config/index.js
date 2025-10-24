require("dotenv").config();

let mongoURI = process.env.MONGODB_AUTH_URI;

// Nếu đang chạy trong GitHub Actions (CI)
if (process.env.NODE_ENV === "ci") {
    mongoURI = "mongodb://mongodb:27017/authdb";
}

module.exports = {
    mongoURI,
    jwtSecret: process.env.JWT_SECRET || "secret",
};