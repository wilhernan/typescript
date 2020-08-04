"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interactionController = void 0;
const interaction_1 = __importDefault(require("../models/interaction"));
const interaction_2 = __importDefault(require("../models/interaction"));
class InteractionController {
    renderFormInteraction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const interaction = yield interaction_1.default.find().lean();
            console.log(interaction);
            res.render('index', {
                interaction
            });
            /* try {
              throw new Error("There was an error getting the Interactions");
                 
             } catch (err) {
                 console.log(err);
                 res.status(500).send('An Internal server ocurred');
             }  */
        });
    }
    saveInteraction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region, } = req.body;
                const interaction = new interaction_1.default({
                    CreatedOn,
                    InteractionID,
                    Campaign,
                    TrafficSource,
                    LandingPage,
                    Rotation,
                    affiliate,
                    Rule,
                    RuleFilter,
                    RuleShedule,
                    Visitor: { Tokens: {
                            name, parameter, value, id
                        },
                        ip_address,
                        geo_location: {
                            country_name, region_name, city_name, coords, isp, organization, connection_type
                        },
                        device: {
                            userAgent, browser, OS: { family, version, vendor }, type, hardware: { model }
                        },
                        incomming_url
                    },
                    Offers,
                    Revenue,
                    hasConversion,
                    TrafficSourceClickID,
                    CPC,
                    MediaBuyerFirstName,
                    MediaBuyerLlastName,
                    server_region,
                });
                yield interaction.save();
            }
            catch (error) {
                next(error);
            }
        });
    }
    renderFormEdit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const interactionEdit = yield interaction_1.default.findById(req.params.id).lean();
                console.log(interactionEdit);
                res.render('edit', {
                    title: 'Edit Interaction',
                    interactionEdit
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateInteraction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region } = req.body;
                const interactionEdit = yield interaction_2.default.findByIdAndUpdate(_id, {
                    CreatedOn,
                    InteractionID,
                    Campaign,
                    TrafficSource,
                    LandingPage,
                    Rotation,
                    affiliate,
                    Rule,
                    RuleFilter,
                    RuleShedule,
                    Visitor: { Tokens: {
                            name, parameter, value, id
                        },
                        ip_address,
                        geo_location: {
                            country_name, region_name, city_name, coords, isp, organization, connection_type
                        },
                        device: {
                            userAgent, browser, OS: { family, version, vendor }, type, hardware: { model }
                        },
                        incomming_url
                    },
                    Offers,
                    Revenue,
                    hasConversion,
                    TrafficSourceClickID,
                    CPC,
                    MediaBuyerFirstName,
                    MediaBuyerLlastName,
                    server_region
                });
                console.log(req.body);
            }
            catch (error) {
                next(error);
            }
        });
    }
    ;
    deleteInteraction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                yield interaction_1.default.remove({ _id: id });
            }
            catch (error) {
                next(error);
            }
        });
    }
    ;
}
exports.interactionController = new InteractionController();
