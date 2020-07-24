//import jsonInteraction from "./interaction.json"

interface Interactions {
    CreatedOn:string;
    InteractionID:string;
    Campaign:string;
    TrafficSource:string;
    LandingPage:string;
    Rotation:string;
    Offers: {
        Affiliate:string;
    };  
    Rule:string;
    RuleFilter:string;
    RuleShedule:boolean;
    Tokens:number;    
    Revenue:number;
    Converted:boolean;
    TrafficSourceClickID:string;
    CPC:number;
    MediaBuyer:string;
    IpAddress:string;
    ServerBy:string;
    Country:string;
    RegionName:string;
    City:string;
    Coords:string;
    ISP:string;
    ConnectionType:string;
    Organization:string;
    UserAgent:string;
    IncommingUrl:string;
    Browser:string;
    OS:string;
    OSVersion:string;
    DeviceVendor:string;
    DeviceType:string;
    DeviceModel:string;
    
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
        Affiliate: (document.getElementById('Affiliate') as HTMLInputElement).value,
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
    
   /* let Int = [newInteraction]
    Int.forEach(function(i) {        
        let td = document.createElement("td");       
        td.innerHTML = newInteraction[i];        
        document.getElementById("myTable").appendChild(td)
    })*/
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
    col8.innerHTML = newInteraction.Rule; document.getElementById("myTable").appendChild(col9);   
    '</td><td>' + newInteraction.RuleFilter + '</td><td>' + newInteraction.RuleShedule + 
    '</td><td>' + newInteraction.Tokens + '</td><td>' + newInteraction.Offers + '</td><td>' + newInteraction.Revenue + 
    '</td><td>' + newInteraction.Converted + '</td><td>' + newInteraction.TrafficSourceClickID + 
    '</td><td>' + newInteraction.CPC + '</td><td>' + newInteraction.MediaBuyer + '</td><td>' + newInteraction.IpAddress +
    '</td><td>' + newInteraction.ServerBy + '</td><td>' + newInteraction.Country + '</td><td>' + newInteraction.RegionName + 
    '</td><td>' + newInteraction.City + '</td><td>' + newInteraction.Coords + '</td><td>' + newInteraction.ISP +
    '</td><td>' + newInteraction.ConnectionType + '</td><td>' + newInteraction.Organization + 
    '</td><td>' + newInteraction.UserAgent + '</td><td>' + newInteraction.IncommingUrl + '</td><td>' + newInteraction.Browser + 
    '</td><td>' + newInteraction.OS + '</td><td>' + newInteraction.OSVersion + '</td><td>' + newInteraction.DeviceVendor +
    '</td><td>' + newInteraction.DeviceType + '</td><td>' + newInteraction.DeviceModel + '</td><td><button type="button" name="remove" id="'  
    '" class="btn btn-danger btn_remove">Quitar</button></td></tr>';
    //i++;

    //let table = document.getElementById("myTable");    
    //table.after(fila);
    
})

