"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// interface Interactions extends Array<Interaction>{}
const InteractionSchema = new mongoose_1.Schema({
    CreatedOn: String,
    InteractionID: String,
    Campaign: {
        name: String,
        CPC: Number,
        MediaBuyer: {
            firstName: String,
            lastName: String
        }
    },
    TrafficSource: {
        name: String
    },
    LandingPage: {
        name: String
    },
    Rotation: {
        name: String
    },
    Offers: {
        name: String,
        affiliate: {
            name: String
        },
        conversion: {
            amount: Number
        }
    },
    Rule: {
        name: String,
        shedule_type: String
    },
    RuleFilter: {
        name: String
    },
    Visitor: {
        Tokens: {
            name: String,
            parameter: String,
            value: String,
            id: String
        },
        ip_address: String,
        geo_location: {
            country_name: String,
            region_name: String,
            city_name: String,
            coords: {
                time_zone: String
            },
            isp: String,
            organization: String,
            connection_type: String
        },
        device: {
            userAgent: String,
            browser: String,
            OS: {
                family: String,
                version: String,
                vendor: String
            },
            type: String,
            hardware: {
                model: String
            }
        },
        incomming_url: String
    },
    hasConversion: Boolean,
    TrafficSourceClickID: String,
    server_region: String
}, { typeKey: '$type' });
exports.default = mongoose_1.model('Interaction', InteractionSchema);
