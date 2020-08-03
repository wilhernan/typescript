import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';

const router: Router = Router();

    router.route('/')
        .get(interactionController.renderFormInteraction)
        .post(interactionController.saveInteraction); 
    router.route('/edit/string/:id')
        .get(interactionController.renderFormEdit)
        .put(interactionController.updateInteraction);
    router.delete('/string/:id', interactionController.deleteInteraction);

        /* try {
             throw new Error("There was an error getting the users");
             
         } catch (err) {
             console.log(err);
             res.status(500).send('An Internal server ocurred');
         }    */   

export default router;