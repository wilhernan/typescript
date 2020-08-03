import {Interaction} from '../models/interaction'

let add = document.getElementById('adicionar');

add.addEventListener("click",function add(){
    console.log('Llegé aqui');
    var Revenue = (document.getElementById('Revenue') as HTMLInputElement).value;
    var Converted = false    
    if ( Revenue > 0 ) {
        Converted = true
    };
    let newInteraction:Interaction = {
        CreatedOn: (document.getElementById('CreatedOn') as HTMLInputElement).value,
        InteractionID: (document.getElementById('InteractionID') as HTMLInputElement).value,
        Campaign: {
            name: (document.getElementById('Campaign') as HTMLInputElement).value,
            CPC: (document.getElementById('CPC') as HTMLInputElement).value,
            MediaBuyer: {
                firstName: (document.getElementById('MediaBuyerFirst') as HTMLInputElement).value,
                lastName: (document.getElementById('MediaBuyerLast') as HTMLInputElement).value,
            }
        }, 
        TrafficSource: {
            name:(document.getElementById('TrafficSource') as HTMLInputElement).value
        }, 
        LandingPage: {
            name: (document.getElementById('LandingPage') as HTMLInputElement).value
        },
        Rotation: {
            name: (document.getElementById('Rotation') as HTMLInputElement).value
        }, 
        Offers: {
            name: (document.getElementById('Offers') as HTMLInputElement).value,
            affiliate: {
                name: (document.getElementById('Affiliate') as HTMLInputElement).value
            },
            conversion: {
                amount:(document.getElementById('Revenue') as HTMLInputElement).value
            } 
        }, 
        Rule: {
            name: (document.getElementById('Rule') as HTMLInputElement).value,
            shedule_type: (document.getElementById('RuleShedule') as HTMLInputElement).value
        }, 
        RuleFilter: {
            name: (document.getElementById('RuleFilter') as HTMLInputElement).value
        },        
        Visitor: {
            Tokens: {
                name: (document.getElementById('TokenName') as HTMLInputElement).value,
                parameter: (document.getElementById('TokenParameter') as HTMLInputElement).value,
                value: (document.getElementById('TokenValue') as HTMLInputElement).value,
                id: (document.getElementById('TokenId') as HTMLInputElement).value
            },
            ip_address: (document.getElementById('IpAddress') as HTMLInputElement).value,
            geo_location: {
                country_name: (document.getElementById('Country') as HTMLInputElement).value,
                region_name: (document.getElementById('RegionName') as HTMLInputElement).value,
                city_name: (document.getElementById('City') as HTMLInputElement).value,
                coords: {
                    time_zone: (document.getElementById('Coords') as HTMLInputElement).value
                },
                isp: (document.getElementById('ISP') as HTMLInputElement).value,
                organization: (document.getElementById('Organization') as HTMLInputElement).value,
                connection_type: (document.getElementById('ConnectionType') as HTMLInputElement).value
            },
            device: {
                userAgent: (document.getElementById('UserAgent') as HTMLInputElement).value,
                browser: (document.getElementById('Browser') as HTMLInputElement).value,
                OS: {
                    family: (document.getElementById('OS') as HTMLInputElement).value,
                    version: (document.getElementById('OSVersion') as HTMLInputElement).value,
                    vendor: (document.getElementById('DeviceVendor') as HTMLInputElement).value,
                },
                type: (document.getElementById('DeviceType') as HTMLInputElement).value,
                hardware: {
                    model: (document.getElementById('DeviceModel') as HTMLInputElement).value 
                }
            },
            incomming_url: (document.getElementById('IncommingUrl') as HTMLInputElement).value          
        },               
        hasConversion: Converted,
        TrafficSourceClickID: (document.getElementById('TrafficSourceClickID') as HTMLInputElement).value,  
        server_region: (document.getElementById('ServerBy') as HTMLInputElement).value  
    }
    
        const data = newInteraction;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('/', options).then(response => {
            var data = JSON.parse(response.json());
            console.log(data);
        }).catch(error =>
            console.error('Error', error))
        .then(response => console.log('Success:', response));
   
    let interaction = [
        newInteraction.CreatedOn,
        newInteraction.InteractionID,
        newInteraction.Campaign.name,
        newInteraction.TrafficSource.name,
        newInteraction.LandingPage.name,
        newInteraction.Rotation.name,
        newInteraction.Offers.affiliate.name,
        newInteraction.Rule.name,
        newInteraction.RuleFilter.name,
        newInteraction.Rule.shedule_type,
        newInteraction.Visitor.Tokens.name,
        newInteraction.Visitor.Tokens.parameter,
        newInteraction.Visitor.Tokens.value,
        newInteraction.Visitor.Tokens.id,
        newInteraction.Offers.name,
        newInteraction.Offers.conversion.amount,
        newInteraction.hasConversion,
        newInteraction.TrafficSourceClickID,
        newInteraction.Campaign.CPC,
        newInteraction.Campaign.MediaBuyer.firstName + ' ' + newInteraction.Campaign.MediaBuyer.lastName,
        newInteraction.Visitor.ip_address,
        newInteraction.server_region,
        newInteraction.Visitor.geo_location.country_name,
        newInteraction.Visitor.geo_location.region_name,
        newInteraction.Visitor.geo_location.city_name,
        newInteraction.Visitor.geo_location.coords.time_zone,
        newInteraction.Visitor.geo_location.isp,
        newInteraction.Visitor.geo_location.connection_type,
        newInteraction.Visitor.geo_location.organization,
        newInteraction.Visitor.device.userAgent,
        newInteraction.Visitor.incomming_url,
        newInteraction.Visitor.device.browser,
        newInteraction.Visitor.device.OS.family,
        newInteraction.Visitor.device.OS.version,
        newInteraction.Visitor.device.OS.vendor,
        newInteraction.Visitor.device.type,
        newInteraction.Visitor.device.hardware.model
    ]
    var i = 0;    
    var tr = document.createElement("tr");
    for (i = 0; i < interaction.length; i++) {
        var td = document.createElement("td");
        td.innerHTML = (interaction[i]);        
        tr.appendChild(td);
        document.getElementById("tBody").appendChild(tr);        
    } 
         
        (document.getElementById('myForm') as HTMLFormElement).reset();
        setTimeout("document.location=document.location", 2000);
})

     
