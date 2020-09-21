import { Request, Response, NextFunction } from 'express';

const auth = async(req: Request, res: Response, next: NextFunction) => {
   const header = req.headers['authorization'];
      
    if(typeof header !== 'undefined'){
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    }else{
        res.sendStatus(403)
    }

}

export default auth;