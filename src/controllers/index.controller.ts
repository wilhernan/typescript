import {Request, Response} from 'express';

class IndexControler {
    public index (req: Request, res: Response){
        res.render('index', {title: 'Reporte Interactions'});
    }
}

export const indexController = new IndexControler();

