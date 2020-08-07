import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';

const router: Router = Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Reporte Interactions'});
}) 
router.get('/interactions', (interactionController.findAllInteractions))    
router.post('/interactions', interactionController.addInteraction); 
router.get('/interactions/:id', (interactionController.findById));
router.put('/interactions/:id',interactionController.updateInteraction);
router.delete('/interactions/:id',interactionController.deleteInteraction);

module.exports = router;