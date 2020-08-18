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

let interactionsArray = [];
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
        interactionsArray = interactions;                     
        updateInteractionsTable(interactions);                   
    });

function updateInteractionsData(interaction){         
    interactionsArray = interactionsArray.map((interactionObject) => { 
        if (interactionObject._id === interaction._id ){
            return interaction
        } else {
            return interactionObject
        } 
    })
    updateInteractionsTable(interactionsArray); 
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
    interactionsArray = interactionsArray.filter(interactionObject => interactionObject._id != interaction.interaction._id);
    updateInteractionsTable(interactionsArray) 
}

document.addEventListener('click', async function editAndDelete(e){          
    let target = e.target as HTMLButtonElement; 
    const buttonTypes = {'deleteButton btn btn-danger btn-sm': 'delete', 'editButton btn btn-primary btn-sm': 'edit' }
    const buttontype = target && buttonTypes[target.className]
    let interactionID = target.closest('tr').getAttribute('id'); 
    switch(buttontype) {
        case 'delete': 
            if(!confirm('Are you sure you want to delete it?')){
                return false
            } else {
                deleteInteraction(interactionID)
            }   
            break;
        case 'edit': 
            (document.getElementById('update')as HTMLButtonElement).removeAttribute('disabled');
            (document.getElementById('adicionar')as HTMLButtonElement).disabled = true;
            editInteraction(interactionID)
            break;
        default:
            (document.getElementById('myForm') as HTMLFormElement).reset();
      }
}) 

async function deleteInteraction(interactionID){
    try {        
        let response = await fetch('/interactions/'+interactionID, { method: 'DELETE'})
        const interaction: Interaction = await response.json();
        console.log(interaction);
        deleteInteractionData(interaction);
    }catch(error) {
        alert(error.message);
        console.error('Error', error);
    }
}

async function editInteraction(interactionID){
    try {
        let response = await fetch('/interactions/'+interactionID)
        const interaction: Interaction = await response.json();
        console.log(interaction);
        updateFormInputs(interaction);
    } catch (error) {
        alert(error.message);
        console.error('Error', error);        
    }
}


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
            const interaction: Interaction = await response.json();
            console.log('Success:', interaction);
            interactionsArray.push(interaction); 
            updateInteractionsTable(interactionsArray);
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
        const interaction: Interaction = await response.json();
        console.log('Success:', interaction);
        updateInteractionsData(interaction);  
        (document.getElementById('myForm') as HTMLFormElement).reset();     
    }catch(error) {
        alert(error.message);
        console.error('Error', error);
    } 
    (document.getElementById('update')as HTMLButtonElement).disabled = true;
    (document.getElementById('adicionar')as HTMLButtonElement).removeAttribute('disabled');    
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