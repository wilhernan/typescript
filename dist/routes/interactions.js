"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interaction_controller_1 = require("../controllers/interaction.controller");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Reporte Interactions' });
});
router.get('/interactions', (interaction_controller_1.interactionController.findAllInteractions));
router.post('/interactions', interaction_controller_1.interactionController.addInteraction);
router.get('/interactions/:id', (interaction_controller_1.interactionController.findById));
router.put('/interactions/:id', interaction_controller_1.interactionController.updateInteraction);
router.delete('/interactions/:id', interaction_controller_1.interactionController.deleteInteraction);
module.exports = router;
