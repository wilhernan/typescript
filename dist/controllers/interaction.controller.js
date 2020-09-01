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
class InteractionController {
    findAllInteractions(req, res) {
        interaction_1.default.find(function (error, interactions) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    console.log('GET /interactions');
                    res.status(200).jsonp(interactions);
                }
                catch (error) {
                    res.status(500).send(error.message);
                }
            });
        }).lean();
    }
    findById(req, res) {
        interaction_1.default.findById(req.params.id, function (error, interaction) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    console.log('GET /interactions/' + req.params.id);
                    res.status(200).jsonp(interaction);
                }
                catch (error) {
                    res.status(500).send(error.message);
                }
            });
        });
    }
    addInteraction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('POST');
            console.log(req.body);
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
            yield interaction.save(function (error, interactions) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        res.status(200).jsonp(interactions);
                    }
                    catch (error) {
                        res.status(500).send(error.message);
                    }
                });
            });
        });
    }
    updateInteraction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords: { time_zone }, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region, } = req.body;
            yield interaction_1.default.findByIdAndUpdate(req.params.id, {
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
                        country_name, region_name, city_name, coords: { time_zone }, isp, organization, connection_type
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
            }, function (error, interaction) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        //res.status(202).send(interaction);
                        interaction_1.default.findById(req.params.id, function (error, interaction) {
                            return __awaiter(this, void 0, void 0, function* () {
                                try {
                                    res.status(200).jsonp(interaction);
                                }
                                catch (error) {
                                    res.status(500).send(error.message);
                                }
                            });
                        });
                    }
                    catch (error) {
                        if (!interaction) {
                            res.status(404).send({
                                message: `Cannot update Interaction with id=${req.params.id}. Maybe Interaction was not found!`
                            });
                        }
                        else {
                            res.status(500).send({
                                message: "Error updating Interaction with id=" + req.params.id
                            });
                        }
                    }
                });
            });
        });
    }
    deleteInteraction(req, res) {
        interaction_1.default.findById(req.params.id, function (error, interaction) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    interaction.remove(function (error, interaction) {
                        return __awaiter(this, void 0, void 0, function* () {
                            try {
                                console.log(interaction);
                                res.status(200).jsonp({ message: "Interaction was Deleted successfully.", interaction });
                            }
                            catch (error) {
                                res.status(500).send(error.message);
                            }
                        });
                    });
                }
                catch (error) {
                    res.status(500).send(error.message);
                }
            });
        });
    }
}
;
exports.interactionController = new InteractionController();
