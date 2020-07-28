import {Request, Response} from 'express';

class IndexControler {
    public index (req: Request, res: Response){
        res.render('index', {title: 'Reporte Interactions'});
    }

    public saveInteraction(req: Request, res: Response){
        console.log(req.body);
        res.send('Received');
    }
}

export const indexController = new IndexControler();

