import {Request, Response} from 'express';
import InteractionModel, { Interaction } from '../models/interaction';

class IndexControler {
    public async renderFormInteraction(req: Request, res: Response): Promise<void>{
        const interaction: Interaction[] = await InteractionModel.find()
        res.render('interaction', {
            title: 'Interaction',
            interaction
        });
    }

    public index (req: Request, res: Response){
        res.render('index', {title: 'Reporte Interactions'});
    }

    public async saveInteraction(req: Request, res: Response){
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
            IpAddress,
            ServeRregion,
            countryName,
            regionName,
            cityName,
            Coords,
            Isp,
            ConnectionType,
            Organization,
            UserAgent,
            IncommingUrl,
            browser,
            OSFamily,
            OSVersion,
            OSVendor,
            Type,
            ModelDevice
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
            IpAddress,
            ServeRregion,
            countryName,
            regionName,
            cityName,
            Coords,
            Isp,
            ConnectionType,
            Organization,
            UserAgent,
            IncommingUrl,
            browser,
            OSFamily,
            OSVersion,
            OSVendor,
            Type,
            ModelDevice
        });
        await interaction.save();
        res.redirect('/');
    }
}

export const indexController = new IndexControler();

