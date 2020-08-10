import { Request, Response, response} from 'express';
import InteractionModel, { Interaction } from '../models/interaction';
import interaction from '../models/interaction';


class InteractionController {
    
    public  findAllInteractions(req: Request, res: Response){        
            InteractionModel.find(function(err, interactions){
                if(err) res.status(500).send(err.message);  
            console.log('GET /interactions')
                res.status(200).jsonp(interactions);                                
            }).lean();
            }                      
    

    public findById(req: Request, res:Response) {
        
            InteractionModel.findById(req.params.id, function(err, interaction) {
            if(err) return res.status(500).send(err.message);
                console.log('GET /interactions/' + req.params.id);
                res.status(200).jsonp(interaction);
            });
    }

    public addInteraction(req: Request, res: Response) {  
        console.log('POST');
        console.log(req.body);       
        const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region, } = req.body;                
        const interaction: Interaction = new InteractionModel({
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
                Visitor: {Tokens:{
                    name, parameter, value, id
                    },
                    ip_address, 
                    geo_location:{
                        country_name, region_name, city_name, coords, isp, organization,  connection_type 
                    },
                    device:{
                        userAgent, browser, OS:{ family, version, vendor}, type, hardware:{ model }
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
            
            interaction.save(function(err, interactions){
                if (err) return res.status(500).send(err.message);
            res.status(200).jsonp(interactions)
            });
         
    }

    public async updateInteraction(req: Request, res: Response){   
        const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region, } = req.body;
        await InteractionModel.findByIdAndUpdate( req.params.id, {        
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
            Visitor: {Tokens:{
                name, parameter, value, id
                },
                ip_address, 
                geo_location:{
                    country_name, region_name, city_name, coords, isp, organization,  connection_type 
                },
                device:{
                    userAgent, browser, OS:{ family, version, vendor}, type, hardware:{ model }
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
        }, { useFindAndModify: false})
            .then(interaction => {
                if (!interaction) {
                    res.status(404).send({
                        message: `Cannot update Interaction with id=${req.params.id}. Maybe Interaction was not found!`
                    });
                } else res.status(202).send({ message: "Interaction was updated successfully." });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Interaction with id=" + req.params.id 
                });
            });   
    }          
       

    public deleteInteraction(req: Request, res: Response){  
        
        InteractionModel.findById(req.params.id, function(err, interaction:Interaction){
            interaction.remove(function(err){
                if(err) return res.status(500).send(err.message);
            res.status(200).send();
            });
        });
    }
};

export const interactionController = new InteractionController(); 

