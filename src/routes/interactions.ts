import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';
import {userController} from '../controllers/user.controller';

const router: Router = Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Reporte Interactions'});
}) 
router.get('/interactions', interactionController.findAllInteractions);   
router.post('/interactions', interactionController.addInteraction); 
router.get('/interactions/:id', interactionController.findById);
router.put('/interactions/:id', interactionController.updateInteraction);
router.delete('/interactions/:id',interactionController.deleteInteraction);
router.post('/authenticate', userController.userAutentication);
router.post('/register', userController.userRegister);
router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController._delete)


module.exports = router;