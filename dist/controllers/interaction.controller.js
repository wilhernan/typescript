"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interactionController = void 0;
const interaction_1 = __importDefault(require("../models/interaction"));
class InteractionController {
    findAllInteractions(req, res) {
        interaction_1.default.find(function (err, interactions) {
            if (err)
                res.status(500).send(err.message);
            console.log('GET /interactions');
            res.status(200).jsonp(interactions);
        }).lean();
    }
    /* try {
      throw new Error("There was an error getting the Interactions");
         
     } catch (err) {
         console.log(err);
         res.status(500).send('An Internal server ocurred');
     }  */
    findById(req, res) {
        interaction_1.default.findById(req.params.id, function (err, interaction) {
            if (err)
                return res.status(500).send(err.message);
            console.log('GET /' + req.params.id);
            res.status(200).jsonp(interaction);
        });
    }
    addInteraction(req, res) {
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
        interaction.save(function (err, interactions) {
            if (err)
                return res.status(500).send(err.message);
            res.status(200).jsonp(interactions);
        });
    }
    /*  public async renderFormEdit(req: Request, res: Response, next: NextFunction)  {
         
             const interactionEdit = await InteractionModel.findById(req.params.id).lean()
             console.log(interactionEdit);
             res.render('edit', {
                 title: 'Edit Interaction',
                 interactionEdit
             });
         
     } */
    updateInteraction(req, res) {
        interaction_1.default.findById(req.params.id, { function(err, interactions) {
                interactions.CreatedOn = req.body.CreatedOn;
                interactions.InteractionID = req.body.InteractionID;
                interactions.Campaign.name = req.body.Campaign.name;
                interactions.Campaign.CPC = req.body.Campaign.CPC;
                interactions.Campaign.MediaBuyer.firstName = req.body.Campaign.MediaBuyer.firstName;
                interactions.Campaign.MediaBuyer.lastName = req.body.Campaign.MediaBuyer.lastName;
                interactions.TrafficSource.name = req.body.TrafficSource.name;
                interactions.LandingPage.name = req.body.LandingPage, name;
                interactions.Rotation.name = req.body.Rotation.name;
                interactions.Rule.name = req.body.Rule.name;
                interactions.RuleFilter.name = req.body.RuleFilter.name;
                interactions.Rule.shedule_type = req.body.Rule.shedule_type;
                interactions.Visitor.Tokens.name = req.body.Visitor.Tokens.name;
                interactions.Visitor.Tokens.parameter = req.body.Visitor.Tokens.parameter;
                interactions.Visitor.Tokens.value = req.body.Visitor.Tokens.value;
                interactions.Visitor.Tokens.id = req.body.Visitor.Tokens.id;
                interactions.Visitor.ip_address = req.body.Visitor.ip_address;
                interactions.Visitor.geo_location.country_name = req.body.Visitor.geo_location.country_name;
                interactions.Visitor.geo_location.region_name = req.body.Visitor.geo_location.region_name;
                interactions.Visitor.geo_location.city_name = req.body.Visitor.geo_location.city_name;
                interactions.Visitor.geo_location.coords.time_zone = req.body.Visitor.geo_location.coords.time_zone;
                interactions.Visitor.geo_location.isp = req.body.Visitor.geo_location.isp;
                interactions.Visitor.geo_location.organization = req.body.Visitor.geo_location.organization;
                interactions.Visitor.geo_location.connection_type = req.body.Visitor.geo_location.connection_type;
                interactions.Visitor.device.userAgent = req.body.Visitor.device.userAgent;
                interactions.Visitor.device.browser = req.body.Visitor.device.browser;
                interactions.Visitor.device.OS.family = req.body.Visitor.device.OS.family;
                interactions.Visitor.device.OS.version = req.body.Visitor.device.OS.version;
                interactions.Visitor.device.OS.vendor = req.body.Visitor.device.OS.vendor;
                interactions.Visitor.device.type = req.body.Visitor.device.type;
                interactions.Visitor.device.hardware.model = req.body.Visitor.device.hardware.model;
                interactions.Visitor.incomming_url = req.body.Visitor.incomming_url;
                interactions.hasConversion = req.body.hasConversion;
                interactions.Offers.affiliate.name = req.body.Offers.affiliate.name;
                interactions.Offers.conversion.amount = req.body.Offers.conversion.amount;
                interactions.Offers.name = req.body.Offers.name;
                interactions.TrafficSourceClickID = req.body.TrafficSourceClickID;
                interactions.server_region = req.body.server_region;
                interactions.save(function (err) {
                    if (err)
                        return res.status(500).send(err.message);
                    res.status(200).jsonp(interactions);
                });
            } });
    }
    deleteInteraction(req, res) {
        interaction_1.default.findById(req.params.id, function (err, interactions) {
            interactions.remove(function (err) {
                if (err)
                    return res.status(500).send(err.message);
                res.status(200).send();
            });
        });
    }
}
;
exports.interactionController = new InteractionController();
