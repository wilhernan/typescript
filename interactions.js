"use strict";
//import jsonInteraction from "./interaction.json"
function getInteraction() {
    $('#adicionar').click;
    document.getElementById;
}
var ad = document.getElementById('adicionar');
ad.addEventListener("click", function () {
    var newInteraction = {
        CreatedOn: document.getElementById('CreatedOn').textContent,
        InteractionID: document.getElementById('InteractionID').textContent,
        Campaign: document.getElementById('Campaign').textContent,
        TrafficSource: document.getElementById('TrafficSource').textContent,
        LandingPage: document.getElementById('LandingPage').textContent,
        Rotation: document.getElementById('Rotation').textContent,
        Affiliate: document.getElementById('Affiliate').textContent,
        Rule: document.getElementById('Rule').textContent,
        RuleFilter: document.getElementById('RuleFilter').textContent,
        RuleShedule: document.getElementById('RuleShedule').textContent,
        Tokens: document.getElementById('Tokens').textContent,
        Offers: document.getElementById('Offers').textContent,
        Revenue: document.getElementById('Revenue').textContent,
        Converted: document.getElementById('Converted').textContent,
        TrafficSourceClickID: document.getElementById('TrafficSourceClickID').textContent,
        CPC: document.getElementById('CPC').textContent,
        MediaBuyer: document.getElementById('MediaBuyer').textContent,
        IpAddress: document.getElementById('IpAddress').textContent,
        ServerBy: document.getElementById('ServerBy').textContent,
        Country: document.getElementById('Country').textContent,
        RegionName: document.getElementById('RegionName').textContent,
        City: document.getElementById('City').textContent,
        Coords: document.getElementById('Coords').textContent,
        ISP: document.getElementById('ISP').textContent,
        ConnectionType: document.getElementById('ConnectionType').textContent,
        Organization: document.getElementById('Organization').textContent,
        UserAgent: document.getElementById('UserAgent').textContent,
        IncommingUrl: document.getElementById('IncommingUrl').textContent,
        Browser: document.getElementById('Browser').textContent,
        OS: document.getElementById('OS').textContent,
        OSVersion: document.getElementById('OSVersion').textContent,
        DeviceVendor: document.getElementById('DeviceVendor').textContent,
        DeviceType: document.getElementById('DeviceType').textContent,
        DeviceModel: document.getElementById('DeviceModel').textContent
    };
    var i = 1;
    var fila = '<tr id="row' + i + '"><td>' + newInteraction.CreatedOn + '</td><td>' + newInteraction.InteractionID +
        '</td><td>' + newInteraction.Campaign + '</td><td>' + newInteraction.TrafficSource + '</td><td>' + newInteraction.LandingPage +
        '</td><td>' + newInteraction.Rotation + '</td><td>' + newInteraction.Affiliate + '</td><td>' + newInteraction.Rule +
        '</td><td>' + newInteraction.RuleFilter + '</td><td>' + newInteraction.RuleShedule +
        '</td><td>' + newInteraction.Tokens + '</td><td>' + newInteraction.Offers + '</td><td>' + newInteraction.Revenue +
        '</td><td>' + newInteraction.Converted + '</td><td>' + newInteraction.TrafficSourceClickID +
        '</td><td>' + newInteraction.CPC + '</td><td>' + newInteraction.MediaBuyer + '</td><td>' + newInteraction.IpAddress +
        '</td><td>' + newInteraction.ServerBy + '</td><td>' + newInteraction.Country + '</td><td>' + newInteraction.RegionName +
        '</td><td>' + newInteraction.City + '</td><td>' + newInteraction.Coords + '</td><td>' + newInteraction.ISP +
        '</td><td>' + newInteraction.ConnectionType + '</td><td>' + newInteraction.Organization +
        '</td><td>' + newInteraction.UserAgent + '</td><td>' + newInteraction.IncommingUrl + '</td><td>' + newInteraction.Browser +
        '</td><td>' + newInteraction.OS + '</td><td>' + newInteraction.OSVersion + '</td><td>' + newInteraction.DeviceVendor +
        '</td><td>' + newInteraction.DeviceType + '</td><td>' + newInteraction.DeviceModel + '</td><td><button type="button" name="remove" id="' + i +
        '" class="btn btn-danger btn_remove">Quitar</button></td></tr>';
    i++;
    var table = document.getElementById("myTable");
    table.after(fila);
});
