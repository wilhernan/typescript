import mongoose, {Schema, model} from 'mongoose';

export interface Interaction extends mongoose.Document {
    CreatedOn:string;
    InteractionID:string;
    Campaign: {
        name: string,
        CPC: number,
        MediaBuyer: {
            firstName: string,
            lastName: string
        }
    };
    TrafficSource: {
        name: string
    };
    LandingPage: {
        name: string
    };
    Rotation: {
        name: string
    };
    Offers: {
        name: string,
        affiliate: {
            name: string
        },
        conversion: {
            amount: number
        }           
    };  
    Rule: {
        name: string,
        shedule_type: string        
    };
    RuleFilter: {
        name: string
    };
    Visitor:  {
        Tokens: {
            name: string,
            parameter: string,
            value: string,
            _id: string
        },
        ip_address: string,
        geo_location: {
            country_name: string,
            region_name: string,
            city_name: string,
            coords: {
                time_zone: string
            },
            isp: string,
            organization: string,
            connection_type: string
        },
        device: {
            userAgent: string,
            browser: string,
            OS: {
                family: string,
                version: string,
                vendor: string
            },
            type: string,
            hardware: {
                model: string
            }
        },
        incomming_url: string
    };    
    hasConversion: boolean;    
    TrafficSourceClickID:string;  
    server_region:string
} 

const InteractionSchema = new Schema({
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
    Visitor:  {
        Tokens: {
            name: String,
            parameter: String,
            value: String,
            _id: String
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
})

export default model<Interaction>('Interaction', InteractionSchema);