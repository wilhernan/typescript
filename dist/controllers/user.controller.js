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
exports.userController = void 0;
const user_1 = __importDefault(require("../user"));
const config_1 = __importDefault(require("../config/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_1 = __importDefault(require("../models/users"));
class UserController {
    userAutentication(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield users_1.default.findOne({ email });
            if (user && bcryptjs_1.default.compareSync(password, user.password)) {
                const token = jsonwebtoken_1.default.sign({ sub: user.id }, config_1.default.jwtSecret, { expiresIn: '7d' });
                res.cookie('token', token, {
                    maxAge: 365 * 24 * 60 * 60 * 100,
                    httpOnly: false
                });
                res.header('token', token).status(200).json(token);
                console.log(token);
            }
            else {
                return ({ message: 'Email or Password is  incorrect' });
            }
            ;
        });
    }
    userRegister(req, res, next) {
        user_1.default.create(req.body)
            .then(user => res.json({ user, message: 'User Created' }))
            .catch(err => next(err));
    }
    update(req, res, next) {
        user_1.default.update(req.params.id, req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }
}
;
exports.userController = new UserController();
