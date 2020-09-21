"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
var uniqueValidator = require('mongoose-unique-Validator');
let roles = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} is not a Valid Role'
};
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is required'],
        validate: [validator_1.default.isEmail, 'Invalid Email address']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },
    role: {
        type: String,
        default: 'USER',
        required: [true],
        enum: roles,
    },
});
userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
};
userSchema.plugin(uniqueValidator, {
    message: '{PATH} Must be Unique'
});
exports.default = mongoose_1.model('User', userSchema);
