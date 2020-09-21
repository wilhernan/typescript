"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interaction_controller_1 = require("../controllers/interaction.controller");
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.Router();
router.get('/user', (req, res) => {
    res.render('userLogin', { title: 'Login User' });
});
router.get('/interactions', (req, res) => {
    res.render('index', { title: 'Reporte Interactions' });
});
router.get('/authenticate', auth_1.default, interaction_controller_1.interactionController.findAllInteractions);
router.post('/interactions', interaction_controller_1.interactionController.addInteraction);
router.get('/interactions/:id', interaction_controller_1.interactionController.findById);
router.put('/interactions/:id', interaction_controller_1.interactionController.updateInteraction);
router.delete('/interactions/:id', interaction_controller_1.interactionController.deleteInteraction);
router.post('/signin', user_controller_1.userController.userAutentication);
router.post('/signup', user_controller_1.userController.userRegister);
router.put('/user/:id', user_controller_1.userController.update);
module.exports = router;
