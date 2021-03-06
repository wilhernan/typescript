import { Request, Response } from 'express';
import InteractionModel, { Interaction } from '../models/interaction';
import jwt from 'jsonwebtoken'
import config from '../config/config';


class InteractionController {

    public  findAllInteractions(req: Request, res: Response){      
        console.log(req.token); 
        jwt.verify(req.token, config.jwtSecret, (err, authorizateData) => {
            if(err){
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            }else{
                console.log('SUCCESS: Connected to protected route');
                InteractionModel.find(async function(error, interactions){
                try {
                    console.log('GET /interactions')
                    res.status(200).jsonp(interactions);
                } catch (error) {
                    res.status(500).send(error.message); 
                }                           
                }).lean();        
            }
        })
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

    public async addInteraction(req: Request, res: Response) {  
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
            await interaction.save(async function(error, interactions){  
                try {
                    res.status(200).jsonp(interactions);
                } catch (error) {
                    res.status(500).send(error.message);
                }    
            });         
    }

    public async updateInteraction(req: Request, res: Response){   
        const { CreatedOn, InteractionID, Campaign, TrafficSource, LandingPage, Rotation, affiliate, Rule, RuleFilter, RuleShedule, Visitor: { Tokens: { name, parameter, value, id }, ip_address, geo_location: { country_name, region_name, city_name, coords:{time_zone}, isp, organization, connection_type }, device: { userAgent, browser, OS: { family, version, vendor }, type, hardware: { model } }, incomming_url }, Offers, Revenue, hasConversion, TrafficSourceClickID, CPC, MediaBuyerFirstName, MediaBuyerLlastName, server_region, } = req.body;
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
                    country_name, region_name, city_name, coords:{time_zone}, isp, organization,  connection_type 
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
                //res.status(202).send(interaction);
                InteractionModel.findById(req.params.id, async function(error, interaction) {
                    try {
                        res.status(200).jsonp(interaction);                        
                    } catch (error) {
                        res.status(500).send(error.message);
                    }
                });
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
        InteractionModel.findById(req.params.id, async function(error, interaction){ 
            try {
                interaction.remove(async function(error, interaction){
                try {
                    console.log(interaction);
                    res.status(200).jsonp({ message: "Interaction was Deleted successfully.", interaction});
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
