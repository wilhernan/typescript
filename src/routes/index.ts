import { Router } from 'express'
import { indexController } from '../controllers/index.controller'

class IndexRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.post('/', indexController.saveInteraction);
    }
}


const indexRoutes = new IndexRoutes();
export default indexRoutes.router;