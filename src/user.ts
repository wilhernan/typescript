import config from './config/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './models/users';

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id }, config.jwtSecret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(userParam: any) {
    console.log(userParam);
    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);
 
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
    return user.toJSON();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    Object.assign(user, userParam);

    await user.save();
    return user.toJSON();
}

async function _delete(id: any) {
    await User.findByIdAndRemove(id);
}

export default { 
        authenticate,
        getAll,
        getById,
        create,
        update,
        delete: _delete
 };