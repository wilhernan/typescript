import { Request, Response, NextFunction} from 'express';
import InteractionModel, { Interaction } from '../models/interaction';

class InteractionController {
    
    public async renderFormInteraction(req: Request, res: Response, next: NextFunction): Promise<void>{        
            const interaction: Interaction[] = await InteractionModel.find().lean()
            console.log(interaction);  
            res.render('index', {
                interaction             
            });
           try {
             throw new Error("There was an error getting the Interactions");
                
            } catch (err) {
                console.log(err);
                res.status(500).send('An Internal server ocurred');
            } 
            
    }

    public async saveInteraction(req: Request, res: Response){         
            console.log(req.body);  
            const { 
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
                    incomming_Url 
                },               
                Offers,
                Revenue,
                hasConversion,
                TrafficSourceClickID,
                CPC,
                MediaBuyerFirstName,
                MediaBuyerLlastName,            
                server_region,  
            } = req.body;
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
                    incomming_Url 
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
            console.log(interaction);       
            await interaction.save();       
                
    }

    public async renderFormEdit(req: Request, res: Response, next: NextFunction)  {      
            const interactionEdit = await InteractionModel.findById(req.params.id).lean()  
            console.log(interactionEdit);     
            res.render('edit', {
                title: 'Edit Interaction',
                interactionEdit
            });       
    }

    public async updateInteraction (req: Request, res: Response, next: NextFunction){         
            console.log(req.body);
            const { id } = req.params;
            await InteractionModel.update({_id : id}, req.body);   
    };

    public async deleteInteraction (req: Request, res: Response, next: NextFunction){        
            let { id } = req.params;
            await InteractionModel.remove({_id : id}); 
    };

}

export const interactionController = new InteractionController(); 