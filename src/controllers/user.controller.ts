import { Request, Response, NextFunction } from 'express';
import userService from "../user"

import config from '../config/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/users';

class UserController {

    public async userAutentication(req: Request, res: Response, next: NextFunction){
        const {email, password} = req.body
        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token: string = jwt.sign({ sub: user.id }, config.jwtSecret, { expiresIn: '7d' });
            res.cookie('token', token, {
                maxAge: 365 * 24 * 60 * 60 * 100,
                httpOnly: false
            })
            res.header('token', token).status(200).json( token );
            console.log( token);
        }else {
            return({ message: 'Email or Password is  incorrect'});
        };
    }     

    public userRegister(req: Request, res: Response, next: NextFunction){
        userService.create(req.body)
            .then(user => res.json({user, message: 'User Created'}))
            .catch(err => next(err));
    }

    public update(req: Request, res: Response, next: NextFunction) {
        userService.update(req.params.id, req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }

};

export const userController = new UserController(); 