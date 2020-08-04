"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interaction_controller_1 = require("../controllers/interaction.controller");
const router = express_1.Router();
router.route('/')
    .get(interaction_controller_1.interactionController.renderFormInteraction)
    .post(interaction_controller_1.interactionController.saveInteraction);
router.route('/edit/:id')
    .get(interaction_controller_1.interactionController.renderFormEdit)
    .put(interaction_controller_1.interactionController.updateInteraction);
router.delete('/string/:id', interaction_controller_1.interactionController.deleteInteraction);
exports.default = router;
