//import jsonInteraction from "./interaction.json"


interface Interactions {
    CreatedOn:string;
    InteractionID:string;
    Campaign: {
        name: string,
        CPC: number,
        MediaBuyer: {
            firstName: string,
            lastName: string
        }
    };
    TrafficSource: {
        name: string
    };
    LandingPage: {
        name: string
    };
    Rotation: {
        name: string
    };
    Offers: {
        name: string,
        affiliate: {
            name: string
        },
        conversion: {
            amount: number
        }           
    };  
    Rule: {
        name: string,
        shedule_type: string        
    };
    RuleFilter: {
        name: string
    };
    Visitor: {
        Token: [],
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
    };    
    hasConversion: boolean;    
    TrafficSourceClickID:string;  
    server_region:string       
}

let ad = document.getElementById('adicionar');
ad.addEventListener("click",function(){
    let newInteraction:Interactions = {
        CreatedOn: (document.getElementById('CreatedOn') as HTMLInputElement).value,
        InteractionID: (document.getElementById('InteractionID') as HTMLInputElement).value,
        Campaign: (document.getElementById('Campaign') as HTMLInputElement).value,
        TrafficSource: (document.getElementById('TrafficSource') as HTMLInputElement).value,
        LandingPage: (document.getElementById('LandingPage') as HTMLInputElement).value,
        Rotation: (document.getElementById('Rotation') as HTMLInputElement).value,
        affiliate: (document.getElementById('Affiliate') as HTMLInputElement).value,
        Rule: (document.getElementById('Rule') as HTMLInputElement).value,
        RuleFilter: (document.getElementById('RuleFilter') as HTMLInputElement).value,
        RuleShedule: (document.getElementById('RuleShedule') as HTMLInputElement).value,
        Tokens: (document.getElementById('Tokens') as HTMLInputElement).value,
        Offers: (document.getElementById('Offers') as HTMLInputElement).value,
        Revenue: (document.getElementById('Revenue') as HTMLInputElement).value,
        Converted: (document.getElementById('Converted') as HTMLInputElement).value,
        TrafficSourceClickID: (document.getElementById('TrafficSourceClickID') as HTMLInputElement).value,
        CPC: (document.getElementById('CPC') as HTMLInputElement).value,
        MediaBuyer: (document.getElementById('MediaBuyer') as HTMLInputElement).value,
        IpAddress: (document.getElementById('IpAddress') as HTMLInputElement).value,
        ServerBy: (document.getElementById('ServerBy') as HTMLInputElement).value,
        Country: (document.getElementById('Country') as HTMLInputElement).value,
        RegionName: (document.getElementById('RegionName') as HTMLInputElement).value,
        City: (document.getElementById('City') as HTMLInputElement).value,
        Coords: (document.getElementById('Coords') as HTMLInputElement).value,
        ISP: (document.getElementById('ISP') as HTMLInputElement).value,
        ConnectionType: (document.getElementById('ConnectionType') as HTMLInputElement).value,
        Organization: (document.getElementById('Organization') as HTMLInputElement).value,
        UserAgent: (document.getElementById('UserAgent') as HTMLInputElement).value,
        IncommingUrl: (document.getElementById('IncommingUrl') as HTMLInputElement).value,
        Browser: (document.getElementById('Browser') as HTMLInputElement).value,
        OS: (document.getElementById('OS') as HTMLInputElement).value,
        OSVersion: (document.getElementById('OSVersion') as HTMLInputElement).value,
        DeviceVendor: (document.getElementById('DeviceVendor') as HTMLInputElement).value,
        DeviceType: (document.getElementById('DeviceType') as HTMLInputElement).value,
        DeviceModel: (document.getElementById('DeviceModel') as HTMLInputElement).value   
    }
    
    let Int = [
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
        newInteraction.Visitor.Token.length,
        newInteraction.Offers.name,
        newInteraction.Offers.conversion.amount,
        newInteraction.hasConversion,
        newInteraction.TrafficSourceClickID,
        newInteraction.Campaign.CPC,
        newInteraction.Campaign.MediaBuyer,
        newInteraction.Visitor.ip_address,
        newInteraction.server_region,
        newInteraction.Visitor.geo_location.country_name,
        newInteraction.Visitor.geo_location.region_name,
        newInteraction.Visitor.geo_location.city_name,
        newInteraction.Visitor.geo_location.coords,
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
    let i = 0
    for (i=0; i<Int.length; i++) {
        let td = document.createElement("td"); 
        td.innerHTML = (Int[i]) 
        document.getElementById("myTable").appendChild(td);
    }
   /*
    let col = document.createElement("td");  
    col.innerHTML = newInteraction.CreatedOn; document.getElementById("myTable").appendChild(col);   
    let col2 = document.createElement("td");   
    col2.innerHTML = newInteraction.InteractionID; document.getElementById("myTable").appendChild(col2);
    let col3 = document.createElement("td"); 
    col3.innerHTML = newInteraction.InteractionID; document.getElementById("myTable").appendChild(col3);   
    let col4 = document.createElement("td"); 
    col4.innerHTML = newInteraction.Campaign; document.getElementById("myTable").appendChild(col4);  
    let col5 = document.createElement("td"); 
    col4.innerHTML = newInteraction.TrafficSource; document.getElementById("myTable").appendChild(col5); 
    let col6 = document.createElement("td"); 
    col6.innerHTML = newInteraction.LandingPage; document.getElementById("myTable").appendChild(col6); 
    let col7 = document.createElement("td"); 
    col6.innerHTML = newInteraction.Rotation; document.getElementById("myTable").appendChild(col7); 
    let col8 = document.createElement("td"); 
    col8.innerHTML = newInteraction.Offers.Affiliate; document.getElementById("myTable").appendChild(col8); 
    let col9 = document.createElement("td"); 
    col8.innerHTML = newInteraction.Rule; document.getElementById("myTable").appendChild(col9);   */
  
    
})

