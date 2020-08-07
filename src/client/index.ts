import {Interaction} from '../models/interaction'
let add = document.getElementById('adicionar');
let Revenue = (document.getElementById('Revenue') as HTMLInputElement).value;
let edit = document.getElementById('update');
let tbody = (document.querySelector('#tBody'));
let Converted = false    
    if ( Revenue > 0) {
        Converted = true
    };

fetch('/interactions')
    .then(function(response){
        return  response.json();
    })
    .then( interactions => {                
        table(interactions);        
    });

function table(interactions){
    tbody.innerHTML = ''
    let i = 0;
    for (i = 0; i < interactions.length; i++){
        tbody.innerHTML += `
        <tr ${interactions[i]._id} >                    
            <td>${interactions[i].CreatedOn}</td>
            <td>${interactions[i].InteractionID} </td>
            <td>${interactions[i].Campaign.name} </td>
            <td>${interactions[i].TrafficSource.name} </td>
            <td>${interactions[i].LandingPage.name} </td>
            <td>${interactions[i].Rotation.name} </td>
            <td>${interactions[i].Offers.affiliate.name} </td>
            <td>${interactions[i].Rule.name} </td>
            <td>${interactions[i].RuleFilter.name} </td>
            <td>${interactions[i].Rule.shedule_type} </td>
            <td>${interactions[i].Visitor.Tokens.name} </td>
            <td>${interactions[i].Visitor.Tokens.parameter} </td>
            <td>${interactions[i].Visitor.Tokens.value} </td>
            <td>${interactions[i].Visitor.Tokens.id} </td>
            <td>${interactions[i].Offers.name} </td>
            <td>${interactions[i].Offers.conversion.amount} </td>
            <td>${interactions[i].hasConversion} </td>
            <td>${interactions[i].TrafficSourceClickID} </td>
            <td>${interactions[i].Campaign.CPC} </td>
            <td>${interactions[i].Campaign.MediaBuyer.firstName} &nbsp ${interactions[i].Campaign.MediaBuyer.lastName} </td>
            <td>${interactions[i].Visitor.ip_address} </td>
            <td>${interactions[i].server_region} </td>
            <td>${interactions[i].Visitor.geo_location.country_name} </td>
            <td>${interactions[i].Visitor.geo_location.region_name} </td>
            <td>${interactions[i].Visitor.geo_location.city_name} </td>
            <td>${interactions[i].Visitor.geo_location.coords.time_zone} </td>
            <td>${interactions[i].Visitor.geo_location.isp} </td>
            <td>${interactions[i].Visitor.geo_location.connection_type} </td>
            <td>${interactions[i].Visitor.geo_location.organization} </td>
            <td>${interactions[i].Visitor.device.userAgent} </td>
            <td>${interactions[i].Visitor.incomming_url} </td>
            <td>${interactions[i].Visitor.device.browser} </td>
            <td>${interactions[i].Visitor.device.OS.family} </td>
            <td>${interactions[i].Visitor.device.OS.version} </td>
            <td>${interactions[i].Visitor.device.OS.vendor} </td>
            <td>${interactions[i].Visitor.device.type} </td>
            <td>${interactions[i].Visitor.device.hardware.model} </td>
            <td>
                <form action="/interactions/${interactions[i]._id}" method="GET">                    
                    <button type="submit" class="editButton btn btn-primary btn-sm"> Update</button>
                </form>               
            </td>
            <td><form action="/interactions/${interactions[i]._id}?_method=DELETE" method="POST">
                    <input type="hidden" name="_method" value="DELETE">
                    <button type="submit" class="btn btn-danger btn-sm"> Delete</button>
                </form>
            </td>
        </tr>        
        `
    }
}

document.addEventListener('click', function(e){    
    let target = e.target as HTMLButtonElement; 
    if(target && target.className === "editButton btn btn-primary btn-sm"){   
        let _id = target.parentNode.action;                   
        fetch(_id)
        .then(function(response){
            return  response.json();
        })
        .then(interaction => {  
            console.log(interaction);              
            update(interaction);        
        });
    }
})   

function update(interaction) {
    document.getElementById("CreatedOn").innerHTML = interaction.CreatedOn;
    document.getElementById("InteractionID").innerHTML = interaction.InteractionID;
    document.getElementById("Campaign").innerHTML = interaction.Campaign.name;
    document.getElementById("CPC").innerHTML = interaction.Campaign.CPC;
    document.getElementById("MediaBuyerFirst").innerHTML = interaction.Campaign.MediaBuyer.firstName;
    document.getElementById("MediaBuyerLast").innerHTML = interaction.Campaign.MediaBuyer.lastName;
    document.getElementById("TrafficSource").innerHTML = interaction.TrafficSource.name;
    document.getElementById("LandingPage").innerHTML = interaction.LandingPage.name;
    document.getElementById("Rotation").innerHTML = interaction.Rotation.name; 
    document.getElementById("Offers").innerHTML = interaction.Offers.name; 
    document.getElementById("Affiliate").innerHTML = interaction.Offers.conversion.amount; 
    document.getElementById("Rule").innerHTML = interaction.Rule.name; 
    document.getElementById("RuleShedule").innerHTML = interaction.Rule.shedule_type; 
    document.getElementById("RuleFilter").innerHTML = interaction.RuleFilter.name; 
    document.getElementById("TokenName").innerHTML = interaction.Visitor.Tokens.name; 
    document.getElementById("TokenName").innerHTML = interaction.Visitor.Tokens.name; 
    document.getElementById("TokenId").innerHTML = interaction.Visitor.Tokens.id; 
    document.getElementById("IpAddress").innerHTML = interaction.Visitor.ip_address;
    document.getElementById("Country").innerHTML = interaction.Visitor.geo_location.country_name;
    document.getElementById("RegionName").innerHTML = interaction.Visitor.geo_location.region_name;
    document.getElementById("City").innerHTML = interaction.Visitor.geo_location.city_name;
    document.getElementById("Coords").innerHTML = interaction.Visitor.geo_location.coords.time_zone;
    document.getElementById("ISP").innerHTML = interaction.Visitor.geo_location.isp;
    document.getElementById("Organization").innerHTML = interaction.Visitor.geo_location.organization;
    document.getElementById("ConnectionType").innerHTML = interaction.Visitor.geo_location.connection_type;
    document.getElementById("UserAgent").innerHTML = interaction.Visitor.device.userAgent;
    document.getElementById("Browser").innerHTML = interaction.Visitor.device.browser;
    document.getElementById("OS").innerHTML = interaction.Visitor.device.OS.family;
    document.getElementById("OSVersion").innerHTML = interaction.Visitor.device.OS.version;
    document.getElementById("DeviceVendor").innerHTML = interaction.Visitor.device.OS.vendor;
    document.getElementById("DeviceType").innerHTML = interaction.Visitor.device.type;
    document.getElementById("DeviceModel").innerHTML = interaction.Visitor.device.hardware.model;
    document.getElementById("IncommingUrl").innerHTML = interaction.Visitor.incomming_url;
    document.getElementById("TrafficSourceClickID").innerHTML = interaction.TrafficSourceClickID;
    document.getElementById("ServerBy").innerHTML = interaction.server_region;
}
    

add.addEventListener("click",function add(){

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
        fetch('/interactions', options)
            .then(response => {
            var data = response.json();
            console.log(data);
        }).catch(error =>
            console.error('Error', error))
        .then(response => console.log('Success:', response));
   
        (document.getElementById('myForm') as HTMLFormElement).reset();
        setTimeout("document.location=document.location", 2000);
})


 /* edit.addEventListener("click",function update(){
    
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
})   */  
