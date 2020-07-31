import { Request, Response } from 'express';
import InteractionModel, { Interaction } from '../models/interaction';


class InteractionController {
    
    public async renderFormInteraction(req: Request, res: Response): Promise<void>{
        const interaction: Interaction[] = await InteractionModel.find().lean()
        res.render('index', {
            interaction             
        });
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
            Tokens,
            TokensName,
            TokensParamater,
            TokensValue ,
            TokensId,
            Offers,
            Revenue,
            Converted,
            TrafficSourceClickID,
            CPC,
            MediaBuyerFirstName,
            MediaBuyerLlastName,
            ip_address,
            geo_location,            
            country_name,
            region_name,
            city_name,
            coords,
            isp,
            connection_type,
            organization,
            device,
            userAgent,
            incomming_Url,
            browser,
            OS,
            family,
            version,
            vendor,
            type,
            hardware,
            model
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
            Tokens,
            TokensName,
            TokensParamater,
            TokensValue,
            TokensId,
            Offers,
            Revenue,
            Converted,
            TrafficSourceClickID,
            CPC,
            MediaBuyerFirstName,
            MediaBuyerLlastName,
            ip_address,
            geo_location,            
            country_name,
            region_name,
            city_name,
            coords,
            isp,
            connection_type,
            organization,
            device,
            userAgent,
            incomming_Url,
            browser,
            OS,
            family,
            version,
            vendor,
            type,
            hardware,
            model
        });
        console.log(interaction);
        await interaction.save();        
    }

    public async renderFormEdit(req: Request, res: Response)  {
        const interactionEdit = await InteractionModel.findById(req.params.id).lean()
        res.render('interaction/edit', {
            title: 'Edit Interaction',
            interactionEdit
        });
    }

    public async updateInteraction (req: Request, res: Response){
        //console.log(req.body);
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
            Tokens,
            TokensName,
            TokensParamater,
            TokensValue ,
            TokensId,
            Offers,
            Revenue,
            Converted,
            TrafficSourceClickID,
            CPC,
            MediaBuyerFirstName,
            MediaBuyerLlastName,
            ip_address,
            geo_location,            
            country_name,
            region_name,
            city_name,
            coords,
            isp,
            connection_type,
            organization,
            device,
            userAgent,
            incomming_Url,
            browser,
            OS,
            family,
            version,
            vendor,
            type,
            hardware,
            model
        } = req.body;
        await InteractionModel.findByIdAndUpdate(req.params.id, {
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
            Tokens,
            TokensName,
            TokensParamater,
            TokensValue,
            TokensId,
            Offers,
            Revenue,
            Converted,
            TrafficSourceClickID,
            CPC,
            MediaBuyerFirstName,
            MediaBuyerLlastName,
            ip_address,
            geo_location,            
            country_name,
            region_name,
            city_name,
            coords,
            isp,
            connection_type,
            organization,
            device,
            userAgent,
            incomming_Url,
            browser,
            OS,
            family,
            version,
            vendor,
            type,
            hardware,
            model
        });
        res.redirect('/');
    };

    public  async deleteInteraction (req: Request, res: Response){
         await InteractionModel.findByIdAndDelete(req.params.id);
         res.redirect('/'); 
    }

    


}



export const interactionController = new InteractionController(); 