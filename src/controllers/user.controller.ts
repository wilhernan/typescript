import { Request, Response, NextFunction } from 'express';
import userService from "../user"

class UserController {

    public userAutentication(req: Request, res: Response, next: NextFunction){
        userService.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or Password is  incorrect'}))
            .catch(err => next(err));
    }     

    public userRegister(req: Request, res: Response, next: NextFunction){
        userService.create(req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }

    public getAll(req: Request, res: Response, next: NextFunction){
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }

    public getById(req: Request, res: Response, next: NextFunction) {
        userService.getById(req.params.id)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    public update(req: Request, res: Response, next: NextFunction) {
        userService.update(req.params.id, req.body)
            .then(user => res.json(user))
            .catch(err => next(err));
    }

    public _delete(req: Request, res: Response, next: NextFunction) {
        userService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    }
};

export const userController = new UserController(); 