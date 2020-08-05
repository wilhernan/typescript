"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/interactions',
        USER: process.env.MONGODB_USER,
        PASWORD: process.env.MONGODB_PASSWORD
    }
};
