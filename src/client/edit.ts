import {Interaction} from '../models/interaction' 

let update = document.getElementById('editar');
update.addEventListener("click",function update(){  

    let updateInteraction:Interaction = { 
        CreatedOn: (document.getElementById('CreatedOn') as HTMLInputElement).value,
        InteractionID: (document.getElementById('InteractionID') as HTMLInputElement).value,
        Campaign: {
            name: (document.getElementById('Campaign') as HTMLInputElement).value,
            CPC: (document.getElementById('CPC') as HTMLInputElement).value,
            MediaBuyer: {
                firstName: (document.getElementById('MediaBuyerFirst') as HTMLInputElement).value,
                lastName: (document.getElementById('MediaBuyerLast') as HTMLInputElement).value
            },        
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
        hasConversion: (document.getElementById('Converted') as HTMLInputElement).value,
        TrafficSourceClickID: (document.getElementById('TrafficSourceClickID') as HTMLInputElement).value,  
        server_region: (document.getElementById('ServerBy') as HTMLInputElement).value  
    }

    const data = updateInteraction;
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

}) 
