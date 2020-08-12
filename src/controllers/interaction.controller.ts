import { Request, Response, response} from 'express';
import InteractionModel, { Interaction } from '../models/interaction';



class InteractionController {
    
    public  findAllInteractions(req: Request, res: Response){        
        InteractionModel.find(async function(error, interactions){
            try {
                console.log('GET /interactions')
                res.status(200).jsonp(interactions);
            } catch (error) {
                res.status(500).send(error.message); 
            }                           
        }).lean();
    }                      
    

    public findById(req: Request, res:Response) {        
        InteractionModel.findById(req.params.id, async function(error, interaction) {
            try {
                console.log('GET /interactions/' + req.params.id);
                res.status(200).jsonp(interaction);
            } catch (error) {
                res.status(500).send(error.message);
            }
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
            interaction.save(async function(error, interactions){  
                try {
                    res.status(200).jsonp(interactions);
                } catch (error) {
                    res.status(500).send(error.message);
                }    
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
        }, async function(error, interaction){
            try {
                let interactions: Interaction[] = interaction;
                console.log(interactions);
                res.status(202).send(interactions);
            }catch (error) {
                if (!interaction) {
                    res.status(404).send({
                        message: `Cannot update Interaction with id=${req.params.id}. Maybe Interaction was not found!`
                    });
                }else{
                    res.status(500).send({
                    message: "Error updating Interaction with id=" + req.params.id 
                    });
                } 
            }
        })            
    }          
       

    public deleteInteraction(req: Request, res: Response){          
        InteractionModel.findById(req.params.id, async function(error, interaction:Interaction){ 
            try {
                interaction.remove(async function(error, interactions){
                try {
                    res.status(200).send({ message: "Interaction was Deleted successfully.", interactions});
                }catch (error) {
                    res.status(500).send(error.message);
                }                     
                })
            } catch (error) {
                res.status(500).send(error.message);
            } 
        })
    }

};

export const interactionController = new InteractionController(); 
