import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';

const router: Router = Router();

    router.route('/')
        .get(interactionController.uploadFormInteraction)
    router.route('/interactions')
        .get(interactionController.findAllInteractions)
        .post(interactionController.addInteraction); 
    router.route('/interactions/:id')
        .get(interactionController.findById)        
        .put(interactionController.updateInteraction)
        .delete(interactionController.deleteInteraction);

export default router;