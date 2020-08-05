"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interaction_controller_1 = require("../controllers/interaction.controller");
const router = express_1.Router();
router.route('/')
    .get(interaction_controller_1.interactionController.uploadFormInteraction);
router.route('/interactions')
    .get(interaction_controller_1.interactionController.findAllInteractions)
    .post(interaction_controller_1.interactionController.addInteraction);
router.route('/interactions/:id')
    .get(interaction_controller_1.interactionController.findById)
    .put(interaction_controller_1.interactionController.updateInteraction)
    .delete(interaction_controller_1.interactionController.deleteInteraction);
exports.default = router;
