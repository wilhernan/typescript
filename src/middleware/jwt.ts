import expressJwt from 'express-jwt';
import config from '../config/config';
import userService from '../user';

function jwt() {
    const secret = config.jwtSecret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/authenticate',
            '/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if (!user) {
        return done(null, true);
    }

    done();
};

export default jwt;