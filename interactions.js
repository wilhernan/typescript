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
        affiliate: document.getElementById('Affiliate').value,
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
    var Int = [
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
    ];
    var i = 0;
    for (i = 0; i < Int.length; i++) {
        var td = document.createElement("td");
        td.innerHTML = (Int[i]);
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
});
