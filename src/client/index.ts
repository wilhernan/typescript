import {Interaction} from '../models/interaction'
let add = document.getElementById('adicionar');
let update = document.getElementById('editar');
let Revenue = (document.getElementById('Revenue') as HTMLInputElement).value;
let tbody = (document.querySelector('#tBody'));
let Converted = false    
    if ( Revenue > 0) {
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

fetch('/interactions')
    .then(function(response){
        return response.json();
    })
    .then( interactions => {
        console.log(interactions);
        table(interactions);
        
    });

function table(interactions){
    tbody.innerHTML = ''
    for(let i of interactions){
        tbody.innerHTML += `
        <tr>                    
            <td>${interactions.CreatedOn}</td>
            <td>${interactions.InteractionID} </td>
            <td>${interactions.Campaign.name} </td>
            <td>${interactions.TrafficSource.name} </td>
            <td>${interactions.LandingPage.name} </td>
            <td>${interactions.Rotation.name} </td>
            <td>${interactions.Offers.affiliate.name} </td>
            <td>${interactions.Rule.name} </td>
            <td>${interactions.RuleFilter.name} </td>
            <td>${interactions.Rule.shedule_type} </td>
            <td>${interactions.Visitor.Tokens.name} </td>
            <td>${interactions.Visitor.Tokens.parameter} </td>
            <td>${interactions.Visitor.Tokens.value} </td>
            <td>${interactions.Visitor.Tokens.id} </td>
            <td>${interactions.Offers.name} </td>
            <td>${interactions.Offers.conversion.amount} </td>
            <td>${interactions.hasConversion} </td>
            <td>${interactions.TrafficSourceClickID} </td>
            <td>${interactions.Campaign.CPC} </td>
            <td>${interactions.Campaign.MediaBuyer.firstName} &nbsp ${interactions.Campaign.MediaBuyer.lastName} </td>
            <td>${interactions.Visitor.ip_address} </td>
            <td>${interactions.server_region} </td>
            <td>${interactions.Visitor.geo_location.country_name} </td>
            <td>${interactions.Visitor.geo_location.region_name} </td>
            <td>${interactions.Visitor.geo_location.city_name} </td>
            <td>${interactions.Visitor.geo_location.coords.time_zone} </td>
            <td>${interactions.Visitor.geo_location.isp} </td>
            <td>${interactions.Visitor.geo_location.connection_type} </td>
            <td>${interactions.Visitor.geo_location.organization} </td>
            <td>${interactions.Visitor.device.userAgent} </td>
            <td>${interactions.Visitor.incomming_url} </td>
            <td>${interactions.Visitor.device.browser} </td>
            <td>${interactions.Visitor.device.OS.family} </td>
            <td>${interactions.Visitor.device.OS.version} </td>
            <td>${interactions.Visitor.device.OS.vendor} </td>
            <td>${interactions.Visitor.device.type} </td>
            <td>${interactions.Visitor.device.hardware.model} </td>
            <td><a href="/interactions/${interactions._id}"> Edit <span class="glyphicon glyphicon-pencil"></span> </a> </td>
            <td><form action="/interactions/${interactions._id}?_method=DELETE" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    <button type="submit" class="btn btn-danger btn-sm"> Delete</button>
                </form>
            </td>
        </tr>        
        `
    }
}

add.addEventListener("click",function add(){
            
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
   
        (document.getElementById('myForm') as HTMLFormElement).reset();
        setTimeout("document.location=document.location", 2000);
})


/* update.addEventListener("click",function update(){
    
    const data = newInteraction;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/edit/', options).then(response => {
        var data = JSON.parse(response.json());
        console.log(data);
    }).catch(error =>
        console.error('Error', error))
    .then(response => console.log('Success:', response));
})    
 */
