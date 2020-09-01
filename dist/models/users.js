"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var uniqueValidator = require('mongoose-unique-Validator');
let roles = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} is not a Valid Role'
};
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'The email is required']
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
