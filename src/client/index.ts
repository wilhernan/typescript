interface Interaction {   
    CreatedOn:string,
    InteractionID:string,
    Campaign: {
        name: string,
        CPC: number,
        MediaBuyer: {
            firstName: string,
            lastName: string
        }
    },
    TrafficSource: {
        name: string
    },
    LandingPage: {
        name: string
    },
    Rotation: {
        name: string
    },
    Offers: {
        name: string,
        affiliate: {
            name: string
        },
        conversion: {
            amount: number
        }           
    }, 
    Rule: {
        name: string,
        shedule_type: string        
    },
    RuleFilter: {
        name: string
    },
    Visitor:  {
        Tokens: {
            name: string,
            parameter: string,
            value: string,
            id: string
        },
        ip_address: string,
        geo_location: {
            country_name: string,
            region_name: string,
            city_name: string,
            coords: {
                time_zone: string
            },
            isp: string,
            organization: string,
            connection_type: string
        },
        device: {
            userAgent: string,
            browser: string,
            OS: {
                family: string,
                version: string,
                vendor: string
            },
            type: string,
            hardware: {
                model: string
            }
        },
        incomming_url: string
    },    
    hasConversion: boolean,     
    TrafficSourceClickID:string,  
    server_region:string
}

let Interactions = [];
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
        Interactions = interactions;                     
        updateInteractionsTable(interactions);                   
    });

function updateInteractionsData(interactions){    
    Interactions.map(function(interaction){
        if(interaction._id == interactions._id){
            interaction.CreatedOn = interactions.CreatedOn;
            interaction.InteractionID = interactions.InteractionID; 
            interaction.Campaign.name = interactions.Campaign.name; 
            interaction.TrafficSource.name = interactions.TrafficSource.name;
            interaction.LandingPage.name = interactions.LandingPage.name;
            interaction.Rotation.name = interactions.Rotation.name;
            interaction.Offers.affiliate.name = interactions.Offers.affiliate.name;
            interaction.Rule.name = interactions.Rule.name;
            interaction.RuleFilter.name = interactions.RuleFilter.name;
            interaction.Rule.shedule_type = interactions.Rule.shedule_type;
            interaction.Visitor.Tokens.name = interactions.Visitor.Tokens.name;
            interaction.Visitor.Tokens.parameter = interactions.Visitor.Tokens.parameter;
            interaction.Visitor.Tokens.value = interactions.Visitor.Tokens.value;
            interaction.Visitor.Tokens.id = interactions.Visitor.Tokens.id;
            interaction.Offers.name = interactions.Offers.name;
            interaction.Offers.conversion.amount = interactions.Offers.conversion.amount;
            interaction.hasConversion = interactions.hasConversion;
            interaction.TrafficSourceClickID = interactions.TrafficSourceClickID;
            interaction.Campaign.CPC = interactions.Campaign.CPC;
            interaction.Campaign.MediaBuyer.firstName = interactions.Campaign.MediaBuyer.firstName;
            interaction.Campaign.MediaBuyer.lastName = interactions.Campaign.MediaBuyer.lastName;
            interaction.Visitor.ip_address = interactions.Visitor.ip_address;
            interaction.server_region = interactions.server_region;
            interaction.Visitor.geo_location.country_name = interactions.Visitor.geo_location.country_name;
            interaction.Visitor.geo_location.region_name = interactions.Visitor.geo_location.region_name;
            interaction.Visitor.geo_location.city_name = interactions.Visitor.geo_location.city_name;
            interaction.Visitor.geo_location.coords.time_zone = interactions.Visitor.geo_location.coords.time_zone;
            interaction.Visitor.geo_location.isp = interactions.Visitor.geo_location.isp;
            interaction.Visitor.geo_location.connection_type = interactions.Visitor.geo_location.connection_type;
            interaction.Visitor.geo_location.organization = interactions.Visitor.geo_location.organization;
            interaction.Visitor.device.userAgent = interactions.Visitor.device.userAgent;
            interaction.Visitor.incomming_url = interactions.Visitor.incomming_url;
            interaction.Visitor.device.browser = interactions.Visitor.device.browser;
            interaction.Visitor.device.OS.family = interactions.Visitor.device.OS.family;
            interaction.Visitor.device.OS.version = interactions.Visitor.device.OS.version;
            interaction.Visitor.device.OS.vendor = interactions.Visitor.device.OS.vendor;
            interaction.Visitor.device.type = interactions.Visitor.device.type;
            interaction.Visitor.device.hardware.model = interactions.Visitor.device.hardware.model;
            updateInteractionsTable(Interactions);  
        }        
    })   
      
}
    
function updateInteractionsTable(interactions: Interaction[]) {    
    tbody.innerHTML = ''    
    interactions.forEach(interaction => { 
        tbody.innerHTML += `
        <tr id=${interaction._id} >                    
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

function deleteInteractionData(interaction){ 
    Interactions.map(function(Interaction){        
        if(Interaction._id == interaction.interaction._id){
            const Index = Interactions.indexOf(Interaction);
            if (Index > -1) {
                Interactions.splice(Index, 1);
            }
            updateInteractionsTable(Interactions);  
        }
    })    
}

document.addEventListener('click', async function editAndDelete(e){        
    let target = e.target as HTMLButtonElement; 
    if(target && target.className === "editButton btn btn-primary btn-sm"){   
        let interactionID = target.closest('tr').getAttribute('id');                   
        fetch('/interactions/'+interactionID)
        .then(function(response){            
            return  response.json();
        }).catch(error =>
            console.error('Error', error))
        .then(interaction => { 
            updateFormInputs(interaction);        
        });
    }else{
        if(target && target.className === "deleteButton btn btn-danger btn-sm"){
            try {
                let interactionID = target.closest('tr').getAttribute('id');
                let response = await fetch('/interactions/'+interactionID, { method: 'DELETE'})
                const interaction = response.json();
                console.log(await interaction);
                deleteInteractionData(await interaction);
            }catch(error) {
                alert(error.message);
                console.error('Error', error);
            }
        }
    }
})   

function updateFormInputs(Interaction) {  
    (document.getElementById("update") as HTMLButtonElement).attributes.item = Interaction._id;  
    (document.getElementById("CreatedOn") as HTMLInputElement).value = Interaction.CreatedOn;
    (document.getElementById("InteractionID")as HTMLInputElement).value  = Interaction.InteractionID;
    (document.getElementById("Campaign")as HTMLInputElement).value  = Interaction.Campaign.name;
    (document.getElementById("CPC")as HTMLInputElement).value  = Interaction.Campaign.CPC;
    (document.getElementById("MediaBuyerFirst")as HTMLInputElement).value  = Interaction.Campaign.MediaBuyer.firstName;
    (document.getElementById("MediaBuyerLast")as HTMLInputElement).value  = Interaction.Campaign.MediaBuyer.lastName;
    (document.getElementById("TrafficSource")as HTMLInputElement).value  = Interaction.TrafficSource.name;
    (document.getElementById("LandingPage")as HTMLInputElement).value  = Interaction.LandingPage.name;
    (document.getElementById("Rotation")as HTMLInputElement).value  = Interaction.Rotation.name; 
    (document.getElementById("Offers")as HTMLInputElement).value  = Interaction.Offers.name; 
    (document.getElementById("Affiliate")as HTMLInputElement).value  = Interaction.Offers.affiliate.name; 
    (document.getElementById("Rule")as HTMLInputElement).value  = Interaction.Rule.name; 
    (document.getElementById("RuleShedule")as HTMLInputElement).value  = Interaction.Rule.shedule_type; 
    (document.getElementById("RuleFilter")as HTMLInputElement).value  = Interaction.RuleFilter.name; 
    (document.getElementById("TokenName")as HTMLInputElement).value  = Interaction.Visitor.Tokens.name; 
    (document.getElementById("TokenParameter")as HTMLInputElement).value  = Interaction.Visitor.Tokens.parameter; 
    (document.getElementById("TokenValue")as HTMLInputElement).value  = Interaction.Visitor.Tokens.value; 
    (document.getElementById("TokenId")as HTMLInputElement).value  = Interaction.Visitor.Tokens.id; 
    (document.getElementById("IpAddress")as HTMLInputElement).value  = Interaction.Visitor.ip_address;
    (document.getElementById("Country")as HTMLInputElement).value  = Interaction.Visitor.geo_location.country_name;
    (document.getElementById("RegionName")as HTMLInputElement).value  = Interaction.Visitor.geo_location.region_name;
    (document.getElementById("City")as HTMLInputElement).value  = Interaction.Visitor.geo_location.city_name;
    (document.getElementById("Coords")as HTMLInputElement).value  = Interaction.Visitor.geo_location.coords.time_zone;
    (document.getElementById("ISP")as HTMLInputElement).value  = Interaction.Visitor.geo_location.isp;
    (document.getElementById("Organization")as HTMLInputElement).value  = Interaction.Visitor.geo_location.organization;
    (document.getElementById("ConnectionType")as HTMLInputElement).value  = Interaction.Visitor.geo_location.connection_type;
    (document.getElementById("UserAgent")as HTMLInputElement).value  = Interaction.Visitor.device.userAgent;
    (document.getElementById("Browser")as HTMLInputElement).value  = Interaction.Visitor.device.browser;
    (document.getElementById("OS")as HTMLInputElement).value  = Interaction.Visitor.device.OS.family;
    (document.getElementById("OSVersion")as HTMLInputElement).value  = Interaction.Visitor.device.OS.version;
    (document.getElementById("DeviceVendor")as HTMLInputElement).value  = Interaction.Visitor.device.OS.vendor;
    (document.getElementById("DeviceType")as HTMLInputElement).value  = Interaction.Visitor.device.type;
    (document.getElementById("DeviceModel")as HTMLInputElement).value  = Interaction.Visitor.device.hardware.model;
    (document.getElementById("IncommingUrl")as HTMLInputElement).value  = Interaction.Visitor.incomming_url;
    (document.getElementById("TrafficSourceClickID")as HTMLInputElement).value  = Interaction.TrafficSourceClickID;
    (document.getElementById("ServerBy")as HTMLInputElement).value  = Interaction.server_region;
    (document.getElementById("Revenue")as HTMLInputElement).value  = Interaction.Offers.conversion.amount;
}

add.addEventListener("click", async function addInteraction(){   
    try {
        const data = initializeInteraction();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        let response = await fetch('/interactions', options)
            const interaction = response.json();
            console.log('Success:', await interaction);
            Interactions.push(await interaction); 
            updateInteractionsTable(Interactions);
            (document.getElementById('myForm') as HTMLFormElement).reset();
    }catch (error) {
        alert(error.message);
        console.error('Error', error)
    } 
})

edit.addEventListener("click", async function updateInteraction(){    
    try {
    const data = initializeInteraction();
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    let response = await fetch('/interactions/'+data._id, options)        
        const interactions = response.json();
        console.log('Success:', await interactions);
        updateInteractionsData(await interactions);  
        (document.getElementById('myForm') as HTMLFormElement).reset();     
    }catch(error) {
        alert(error.message);
        console.error('Error', error);
    }     
})   

function initializeInteraction(){    
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