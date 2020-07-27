"use strict";
//import jsonInteraction from "./interaction.json"
var ad = document.getElementById('adicionar');
ad.addEventListener("click", function () {
    var newInteraction = {
        CreatedOn: document.getElementById('CreatedOn').value,
        InteractionID: document.getElementById('InteractionID').value,
        Campaign: {
            name: document.getElementById('Campaign').value,
            CPC: document.getElementById('CPC').value,
            MediaBuyer: {
                firstName: document.getElementById('MediaBuyerFirst').value,
                lastName: document.getElementById('MediaBuyerLast').value,
            }
        },
        TrafficSource: {
            name: document.getElementById('TrafficSource').value
        },
        LandingPage: {
            name: document.getElementById('LandingPage').value
        },
        Rotation: {
            name: document.getElementById('Rotation').value
        },
        Offers: {
            name: document.getElementById('Offers').value,
            affiliate: {
                name: document.getElementById('Affiliate').value
            },
            conversion: {
                amount: document.getElementById('Revenue').value
            }
        },
        Rule: {
            name: document.getElementById('Rule').value,
            shedule_type: document.getElementById('RuleShedule').value
        },
        RuleFilter: {
            name: document.getElementById('RuleFilter').value
        },
        Visitor: {
            Tokens: {
                name: document.getElementById('TokenName').value,
                paramater: document.getElementById('TokenParameter').value,
                value: document.getElementById('TokenValue').value,
                _id: document.getElementById('TokenId').value
            },
            ip_address: document.getElementById('IpAddress').value,
            geo_location: {
                country_name: document.getElementById('Country').value,
                region_name: document.getElementById('RegionName').value,
                city_name: document.getElementById('City').value,
                coords: {
                    time_zone: document.getElementById('Coords').value
                },
                isp: document.getElementById('ISP').value,
                organization: document.getElementById('Organization').value,
                connection_type: document.getElementById('ConnectionType').value
            },
            device: {
                userAgent: document.getElementById('UserAgent').value,
                browser: document.getElementById('Browser').value,
                OS: {
                    family: document.getElementById('OS').value,
                    version: document.getElementById('OSVersion').value,
                    vendor: document.getElementById('DeviceVendor').value,
                },
                type: document.getElementById('DeviceType').value,
                hardware: {
                    model: document.getElementById('DeviceModel').value
                }
            },
            incomming_url: document.getElementById('IncommingUrl').value
        },
        hasConversion: document.getElementById('Converted').value,
        TrafficSourceClickID: document.getElementById('TrafficSourceClickID').value,
        server_region: document.getElementById('ServerBy').value
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
        newInteraction.Visitor.Tokens.name,
        newInteraction.Visitor.Tokens.paramater,
        newInteraction.Visitor.Tokens.value,
        newInteraction.Visitor.Tokens._id,
        newInteraction.Offers.name,
        newInteraction.Offers.conversion.amount,
        newInteraction.hasConversion,
        newInteraction.TrafficSourceClickID,
        newInteraction.Campaign.CPC,
        newInteraction.Campaign.MediaBuyer.firstName + ' ' + newInteraction.Campaign.MediaBuyer.lastName,
        newInteraction.Visitor.ip_address,
        newInteraction.server_region,
        newInteraction.Visitor.geo_location.country_name,
        newInteraction.Visitor.geo_location.region_name,
        newInteraction.Visitor.geo_location.city_name,
        newInteraction.Visitor.geo_location.coords.time_zone,
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
    var tr = document.createElement("tr");
    for (i = 0; i < Int.length; i++) {
        var td = document.createElement("td");
        td.innerHTML = (Int[i]);
        tr.appendChild(td);
        document.getElementById("myTable").appendChild(tr);
    }
    if (i == Int.length) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "Modificar";
        btn.id = "btnEdit";
        btn.onclick = function () {
            var row = btn.parentNode.parentNode;
            document.getElementById('CreatedOn').value = row.children[0].innerHTML;
            document.getElementById('InteractionID').value = row.children[1].innerHTML;
            document.getElementById('Campaign').value = row.children[2].innerHTML;
            document.getElementById('CPC').value = row.children[18].innerHTML;
            document.getElementById('MediaBuyerFirst').value = row.children[19].innerHTML;
            document.getElementById('MediaBuyerLast').value = row.children[20].innerHTML;
            document.getElementById('TrafficSource').value = row.children[3].innerHTML;
            document.getElementById('LandingPage').value = row.children[4].innerHTML;
            document.getElementById('Rotation').value = row.children[5].innerHTML;
            document.getElementById('Offers').value = row.children[14].innerHTML;
            document.getElementById('Affiliate').value = row.children[6].innerHTML;
            document.getElementById('Revenue').value = row.children[15].innerHTML;
            document.getElementById('Rule').value = row.children[7].innerHTML;
            document.getElementById('RuleShedule').value = row.children[9].innerHTML;
            document.getElementById('RuleFilter').value = row.children[8].innerHTML;
            document.getElementById('TokenName').value = row.children[10].innerHTML;
            document.getElementById('TokenParameter').value = row.children[11].innerHTML;
            document.getElementById('TokenValue').value = row.children[12].innerHTML;
            document.getElementById('TokenId').value = row.children[13].innerHTML;
            document.getElementById('IpAddress').value = row.children[21].innerHTML;
            document.getElementById('Country').value = row.children[23].innerHTML;
            document.getElementById('RegionName').value = row.children[24].innerHTML;
            document.getElementById('City').value = row.children[25].innerHTML;
            document.getElementById('Coords').value = row.children[26].innerHTML;
            document.getElementById('ISP').value = row.children[27].innerHTML;
            document.getElementById('Organization').value = row.children[29].innerHTML;
            document.getElementById('ConnectionType').value = row.children[28].innerHTML;
            document.getElementById('UserAgent').value = row.children[30].innerHTML;
            document.getElementById('Browser').value = row.children[32].innerHTML;
            document.getElementById('OS').value = row.children[33].innerHTML;
            document.getElementById('OSVersion').value = row.children[34].innerHTML;
            document.getElementById('DeviceVendor').value = row.children[35].innerHTML;
            document.getElementById('DeviceType').value = row.children[36].innerHTML;
            document.getElementById('DeviceModel').value = row.children[37].innerHTML;
            document.getElementById('IncommingUrl').value = row.children[31].innerHTML;
            document.getElementById('Converted').value = row.children[16].innerHTML;
            document.getElementById('TrafficSourceClickID').value = row.children[17].innerHTML;
            document.getElementById('ServerBy').value = row.children[22].innerHTML;
            row.parentNode.removeChild(row);
        };
        var td3 = document.createElement("td");
        td3.appendChild(btn);
        tr.appendChild(td3);
        document.getElementById("myTable").appendChild(tr);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = "Eliminar";
        btn.id = "btnDel";
        btn.onclick = function () {
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
        var td2 = document.createElement("td");
        td2.appendChild(btn);
        tr.appendChild(td2);
        document.getElementById("myTable").appendChild(tr);
    }
    document.getElementById('myForm').reset();
});
