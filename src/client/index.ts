
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
        return response.json();
    })
    .then(interactions => {                
        table(interactions);            
    });
    
function table(interactions){    
    tbody.innerHTML = ''    
    interactions.forEach(interaction => { 
        tbody.innerHTML += `
        <tr ${interaction._id} >                    
            <td>${interaction.CreatedOn}</td>
            <td>${interaction.InteractionID} </td>
            <td>${interaction.Campaign.name} </td>
            <td>${interaction.TrafficSource.name} </td>
            <td>${interaction.LandingPage.name} </td>
            <td>${interaction.Rotation.name} </td>
            <td>${interaction.Offers.affiliate.name} </td>
            <td>${interaction.Rule.name} </td>
            <td>${interaction.RuleFilter.name} </td>
            <td>${interaction.Rule.shedule_type} </td>
            <td>${interaction.Visitor.Tokens.name} </td>
            <td>${interaction.Visitor.Tokens.parameter} </td>
            <td>${interaction.Visitor.Tokens.value} </td>
            <td>${interaction.Visitor.Tokens.id} </td>
            <td>${interaction.Offers.name} </td>
            <td>${interaction.Offers.conversion.amount} </td>
            <td>${interaction.hasConversion} </td>
            <td>${interaction.TrafficSourceClickID} </td>
            <td>${interaction.Campaign.CPC} </td>
            <td>${interaction.Campaign.MediaBuyer.firstName} &nbsp ${interaction.Campaign.MediaBuyer.lastName} </td>
            <td>${interaction.Visitor.ip_address} </td>
            <td>${interaction.server_region} </td>
            <td>${interaction.Visitor.geo_location.country_name} </td>
            <td>${interaction.Visitor.geo_location.region_name} </td>
            <td>${interaction.Visitor.geo_location.city_name} </td>
            <td>${interaction.Visitor.geo_location.coords.time_zone} </td>
            <td>${interaction.Visitor.geo_location.isp} </td>
            <td>${interaction.Visitor.geo_location.connection_type} </td>
            <td>${interaction.Visitor.geo_location.organization} </td>
            <td>${interaction.Visitor.device.userAgent} </td>
            <td>${interaction.Visitor.incomming_url} </td>
            <td>${interaction.Visitor.device.browser} </td>
            <td>${interaction.Visitor.device.OS.family} </td>
            <td>${interaction.Visitor.device.OS.version} </td>
            <td>${interaction.Visitor.device.OS.vendor} </td>
            <td>${interaction.Visitor.device.type} </td>
            <td>${interaction.Visitor.device.hardware.model} </td>
            <td>                               
                <button type="submit" class="editButton btn btn-primary btn-sm"> Update</button>                           
            </td>
            <td>
                <button type="submit" class="deleteButton btn btn-danger btn-sm"> Delete</button>                
            </td>
        </tr>        
        `        
     })  
}

document.addEventListener('click', function(e){        
    let target = e.target as HTMLButtonElement; 
    if(target && target.className === "editButton btn btn-primary btn-sm"){   
        let interactionID = target.closest('tr').attributes.item(0).name;                   
        fetch('/interactions/'+interactionID)
        .then(function(response){            
            return  response.json();
        })
        .then(interaction => {  
            console.log(interaction);              
            update(interaction);        
        });
    }else{
        if(target && target.className === "deleteButton btn btn-danger btn-sm"){
            let interactionID = target.closest('tr').attributes.item(0).name;
            fetch('/interactions/'+interactionID, { method: 'DELETE'})
            .then(response => {
                response.json();
            })
            .then(interaction => console.log(interaction));
            setTimeout("document.location=document.location", 2000);
        }
    }
})   

function update(interaction) {  
    (document.getElementById("update") as HTMLButtonElement).attributes.item = interaction._id;  
    (document.getElementById("CreatedOn") as HTMLInputElement).value = interaction.CreatedOn;
    (document.getElementById("InteractionID")as HTMLInputElement).value  = interaction.InteractionID;
    (document.getElementById("Campaign")as HTMLInputElement).value  = interaction.Campaign.name;
    (document.getElementById("CPC")as HTMLInputElement).value  = interaction.Campaign.CPC;
    (document.getElementById("MediaBuyerFirst")as HTMLInputElement).value  = interaction.Campaign.MediaBuyer.firstName;
    (document.getElementById("MediaBuyerLast")as HTMLInputElement).value  = interaction.Campaign.MediaBuyer.lastName;
    (document.getElementById("TrafficSource")as HTMLInputElement).value  = interaction.TrafficSource.name;
    (document.getElementById("LandingPage")as HTMLInputElement).value  = interaction.LandingPage.name;
    (document.getElementById("Rotation")as HTMLInputElement).value  = interaction.Rotation.name; 
    (document.getElementById("Offers")as HTMLInputElement).value  = interaction.Offers.name; 
    (document.getElementById("Affiliate")as HTMLInputElement).value  = interaction.Offers.affiliate.name; 
    (document.getElementById("Rule")as HTMLInputElement).value  = interaction.Rule.name; 
    (document.getElementById("RuleShedule")as HTMLInputElement).value  = interaction.Rule.shedule_type; 
    (document.getElementById("RuleFilter")as HTMLInputElement).value  = interaction.RuleFilter.name; 
    (document.getElementById("TokenName")as HTMLInputElement).value  = interaction.Visitor.Tokens.name; 
    (document.getElementById("TokenParameter")as HTMLInputElement).value  = interaction.Visitor.Tokens.parameter; 
    (document.getElementById("TokenValue")as HTMLInputElement).value  = interaction.Visitor.Tokens.value; 
    (document.getElementById("TokenId")as HTMLInputElement).value  = interaction.Visitor.Tokens.id; 
    (document.getElementById("IpAddress")as HTMLInputElement).value  = interaction.Visitor.ip_address;
    (document.getElementById("Country")as HTMLInputElement).value  = interaction.Visitor.geo_location.country_name;
    (document.getElementById("RegionName")as HTMLInputElement).value  = interaction.Visitor.geo_location.region_name;
    (document.getElementById("City")as HTMLInputElement).value  = interaction.Visitor.geo_location.city_name;
    (document.getElementById("Coords")as HTMLInputElement).value  = interaction.Visitor.geo_location.coords.time_zone;
    (document.getElementById("ISP")as HTMLInputElement).value  = interaction.Visitor.geo_location.isp;
    (document.getElementById("Organization")as HTMLInputElement).value  = interaction.Visitor.geo_location.organization;
    (document.getElementById("ConnectionType")as HTMLInputElement).value  = interaction.Visitor.geo_location.connection_type;
    (document.getElementById("UserAgent")as HTMLInputElement).value  = interaction.Visitor.device.userAgent;
    (document.getElementById("Browser")as HTMLInputElement).value  = interaction.Visitor.device.browser;
    (document.getElementById("OS")as HTMLInputElement).value  = interaction.Visitor.device.OS.family;
    (document.getElementById("OSVersion")as HTMLInputElement).value  = interaction.Visitor.device.OS.version;
    (document.getElementById("DeviceVendor")as HTMLInputElement).value  = interaction.Visitor.device.OS.vendor;
    (document.getElementById("DeviceType")as HTMLInputElement).value  = interaction.Visitor.device.type;
    (document.getElementById("DeviceModel")as HTMLInputElement).value  = interaction.Visitor.device.hardware.model;
    (document.getElementById("IncommingUrl")as HTMLInputElement).value  = interaction.Visitor.incomming_url;
    (document.getElementById("TrafficSourceClickID")as HTMLInputElement).value  = interaction.TrafficSourceClickID;
    (document.getElementById("ServerBy")as HTMLInputElement).value  = interaction.server_region;
    (document.getElementById("Revenue")as HTMLInputElement).value  = interaction.Offers.conversion.amount;
}

add.addEventListener("click",function add(){                
    const data = upload();
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

edit.addEventListener("click",function update(){    
    const data = upload();
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/interactions/'+data._id, options)
    .then(response => {
        var data = response.json();
        console.log(data);
    }).catch(error =>
        console.error('Error', error))
    .then(response => console.log('Success:', response));

    (document.getElementById('myForm') as HTMLFormElement).reset();
    setTimeout("document.location=document.location", 2000);
})   

function upload(){    
    let newInteraction;
    newInteraction = {
        _id: (document.getElementById("update") as HTMLButtonElement).attributes.item,
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
    return newInteraction;
}