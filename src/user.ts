
import bcrypt from 'bcryptjs';
import User from './models/users';

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

async function getById(id) {
    return await User.findById(id);
}

export default { 
        create,
        update,
        getById
 };