"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("../user"));
class UserController {
    userAutentication(req, res, next) {
        user_1.default.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or Password is  incorrect' }))
            .catch(err => next(err));
    }
    userRegister(req, res, next) {
        user_1.default.create(req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }
    getAll(req, res, next) {
        user_1.default.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }
    getById(req, res, next) {
        user_1.default.getById(req.params.id)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }
    update(req, res, next) {
        user_1.default.update(req.params.id, req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }
    _delete(req, res, next) {
        user_1.default.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    }
}
;
exports.userController = new UserController();
