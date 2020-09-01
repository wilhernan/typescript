"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = __importDefault(require("express-jwt"));
const config_1 = __importDefault(require("../config/config"));
const user_1 = __importDefault(require("../user"));
function jwt() {
    const secret = config_1.default.jwtSecret;
    return express_jwt_1.default({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/authenticate',
            '/register'
        ]
    });
}
function isRevoked(req, payload, done) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_1.default.getById(payload.sub);
        if (!user) {
            return done(null, true);
        }
        done();
    });
}
;
exports.default = jwt;
