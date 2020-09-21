import { Router } from 'express';
import { interactionController } from '../controllers/interaction.controller';
import {userController} from '../controllers/user.controller';
import auth from '../middleware/auth'

const router: Router = Router();

router.get('/user', (req, res) => {
    res.render('userLogin', {title: 'Login User'});    
})
router.get('/interactions', (req, res) => {
    res.render('index', {title: 'Reporte Interactions'});
}) 
router.get('/authenticate', auth, interactionController.findAllInteractions);   
router.post('/interactions', interactionController.addInteraction); 
router.get('/interactions/:id', interactionController.findById);
router.put('/interactions/:id', interactionController.updateInteraction);
router.delete('/interactions/:id',interactionController.deleteInteraction);
router.post('/signin', userController.userAutentication);
router.post('/signup', userController.userRegister);

router.put('/user/:id', userController.update);

module.exports = router;