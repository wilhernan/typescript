import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';


class InteractionRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', interactionController.renderFormInteraction);
        this.router.post('/', interactionController.saveInteraction);        
        this.router.get('/edit/:id', interactionController.renderFormEdit);
        this.router.put('/edit/:id', interactionController.updateInteraction);
        this.router.delete('/:id', interactionController.deleteInteraction);
    }
}
const interactionRoutes = new InteractionRoutes();
export default interactionRoutes.router;