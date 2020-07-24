"use strict";
//import jsonInteraction from "./interaction.json"
var ad = document.getElementById('adicionar');
ad.addEventListener("click", function () {
    var newInteraction = {
        CreatedOn: document.getElementById('CreatedOn').value,
        InteractionID: document.getElementById('InteractionID').value,
        Campaign: document.getElementById('Campaign').value,
        TrafficSource: document.getElementById('TrafficSource').value,
        LandingPage: document.getElementById('LandingPage').value,
        Rotation: document.getElementById('Rotation').value,
        Affiliate: document.getElementById('Affiliate').value,
        Rule: document.getElementById('Rule').value,
        RuleFilter: document.getElementById('RuleFilter').value,
        RuleShedule: document.getElementById('RuleShedule').value,
        Tokens: document.getElementById('Tokens').value,
        Offers: document.getElementById('Offers').value,
        Revenue: document.getElementById('Revenue').value,
        Converted: document.getElementById('Converted').value,
        TrafficSourceClickID: document.getElementById('TrafficSourceClickID').value,
        CPC: document.getElementById('CPC').value,
        MediaBuyer: document.getElementById('MediaBuyer').value,
        IpAddress: document.getElementById('IpAddress').value,
        ServerBy: document.getElementById('ServerBy').value,
        Country: document.getElementById('Country').value,
        RegionName: document.getElementById('RegionName').value,
        City: document.getElementById('City').value,
        Coords: document.getElementById('Coords').value,
        ISP: document.getElementById('ISP').value,
        ConnectionType: document.getElementById('ConnectionType').value,
        Organization: document.getElementById('Organization').value,
        UserAgent: document.getElementById('UserAgent').value,
        IncommingUrl: document.getElementById('IncommingUrl').value,
        Browser: document.getElementById('Browser').value,
        OS: document.getElementById('OS').value,
        OSVersion: document.getElementById('OSVersion').value,
        DeviceVendor: document.getElementById('DeviceVendor').value,
        DeviceType: document.getElementById('DeviceType').value,
        DeviceModel: document.getElementById('DeviceModel').value
    };
    /* let Int = [newInteraction]
     Int.forEach(function(i) {
         let td = document.createElement("td");
         td.innerHTML = newInteraction[i];
         document.getElementById("myTable").appendChild(td)
     })*/
    var col = document.createElement("td");
    col.innerHTML = newInteraction.CreatedOn;
    document.getElementById("myTable").appendChild(col);
    var col2 = document.createElement("td");
    col2.innerHTML = newInteraction.InteractionID;
    document.getElementById("myTable").appendChild(col2);
    var col3 = document.createElement("td");
    col3.innerHTML = newInteraction.InteractionID;
    document.getElementById("myTable").appendChild(col3);
    var col4 = document.createElement("td");
    col4.innerHTML = newInteraction.Campaign;
    document.getElementById("myTable").appendChild(col4);
    var col5 = document.createElement("td");
    col4.innerHTML = newInteraction.TrafficSource;
    document.getElementById("myTable").appendChild(col5);
    var col6 = document.createElement("td");
    col6.innerHTML = newInteraction.LandingPage;
    document.getElementById("myTable").appendChild(col6);
    var col7 = document.createElement("td");
    col6.innerHTML = newInteraction.Rotation;
    document.getElementById("myTable").appendChild(col7);
    var col8 = document.createElement("td");
    col8.innerHTML = newInteraction.Offers.Affiliate;
    document.getElementById("myTable").appendChild(col8);
    var col9 = document.createElement("td");
    col8.innerHTML = newInteraction.Rule;
    document.getElementById("myTable").appendChild(col9);
    '</td><td>' + newInteraction.RuleFilter + '</td><td>' + newInteraction.RuleShedule +
        '</td><td>' + newInteraction.Tokens + '</td><td>' + newInteraction.Offers + '</td><td>' + newInteraction.Revenue +
        '</td><td>' + newInteraction.Converted + '</td><td>' + newInteraction.TrafficSourceClickID +
        '</td><td>' + newInteraction.CPC + '</td><td>' + newInteraction.MediaBuyer + '</td><td>' + newInteraction.IpAddress +
        '</td><td>' + newInteraction.ServerBy + '</td><td>' + newInteraction.Country + '</td><td>' + newInteraction.RegionName +
        '</td><td>' + newInteraction.City + '</td><td>' + newInteraction.Coords + '</td><td>' + newInteraction.ISP +
        '</td><td>' + newInteraction.ConnectionType + '</td><td>' + newInteraction.Organization +
        '</td><td>' + newInteraction.UserAgent + '</td><td>' + newInteraction.IncommingUrl + '</td><td>' + newInteraction.Browser +
        '</td><td>' + newInteraction.OS + '</td><td>' + newInteraction.OSVersion + '</td><td>' + newInteraction.DeviceVendor +
        '</td><td>' + newInteraction.DeviceType + '</td><td>' + newInteraction.DeviceModel + '</td><td><button type="button" name="remove" id="';
    '" class="btn btn-danger btn_remove">Quitar</button></td></tr>';
    //i++;
    //let table = document.getElementById("myTable");    
    //table.after(fila);
});
