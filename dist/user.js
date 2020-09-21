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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_1 = __importDefault(require("./models/users"));
function create(userParam) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(userParam);
        if (yield users_1.default.findOne({ email: userParam.email })) {
            throw 'Email "' + userParam.email + '" is already taken';
        }
        const user = new users_1.default(userParam);
        if (userParam.password) {
            user.password = bcryptjs_1.default.hashSync(userParam.password, 10);
        }
        yield user.save();
        return user.toJSON();
    });
}
function update(id, userParam) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield users_1.default.findById(id);
        if (!user)
            throw 'User not found';
        if (user.email !== userParam.email && (yield users_1.default.findOne({ email: userParam.email }))) {
            throw 'Email "' + userParam.email + '" is already taken';
        }
        if (userParam.password) {
            userParam.hash = bcryptjs_1.default.hashSync(userParam.password, 10);
        }
        Object.assign(user, userParam);
        yield user.save();
        return user.toJSON();
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield users_1.default.findById(id);
    });
}
exports.default = {
    create,
    update,
    getById
};
