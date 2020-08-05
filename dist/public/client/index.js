"use strict";
exports.__esModule = true;
var add = document.getElementById('adicionar');
var update = document.getElementById('editar');
var Revenue = document.getElementById('Revenue').value;
var tbody = (document.querySelector('#tBody'));
var Converted = false;
if (Revenue > 0) {
    Converted = true;
}
;
var newInteraction = {
    CreatedOn: document.getElementById('CreatedOn').value,
    InteractionID: document.getElementById('InteractionID').value,
    Campaign: {
        name: document.getElementById('Campaign').value,
        CPC: document.getElementById('CPC').value,
        MediaBuyer: {
            firstName: document.getElementById('MediaBuyerFirst').value,
            lastName: document.getElementById('MediaBuyerLast').value
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
            parameter: document.getElementById('TokenParameter').value,
            value: document.getElementById('TokenValue').value,
            id: document.getElementById('TokenId').value
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
                vendor: document.getElementById('DeviceVendor').value
            },
            type: document.getElementById('DeviceType').value,
            hardware: {
                model: document.getElementById('DeviceModel').value
            }
        },
        incomming_url: document.getElementById('IncommingUrl').value
    },
    hasConversion: Converted,
    TrafficSourceClickID: document.getElementById('TrafficSourceClickID').value,
    server_region: document.getElementById('ServerBy').value
};
fetch('/interactions')
    .then(function (response) {
    return response.json();
})
    .then(function (interactions) {
    console.log(interactions);
    table(interactions);
});
function table(interactions) {
    tbody.innerHTML = '';
    for (var _i = 0, interactions_1 = interactions; _i < interactions_1.length; _i++) {
        var i = interactions_1[_i];
        tbody.innerHTML += "\n        <tr>                    \n            <td>" + interactions.CreatedOn + "</td>\n            <td>" + interactions.InteractionID + " </td>\n            <td>" + interactions.Campaign.name + " </td>\n            <td>" + interactions.TrafficSource.name + " </td>\n            <td>" + interactions.LandingPage.name + " </td>\n            <td>" + interactions.Rotation.name + " </td>\n            <td>" + interactions.Offers.affiliate.name + " </td>\n            <td>" + interactions.Rule.name + " </td>\n            <td>" + interactions.RuleFilter.name + " </td>\n            <td>" + interactions.Rule.shedule_type + " </td>\n            <td>" + interactions.Visitor.Tokens.name + " </td>\n            <td>" + interactions.Visitor.Tokens.parameter + " </td>\n            <td>" + interactions.Visitor.Tokens.value + " </td>\n            <td>" + interactions.Visitor.Tokens.id + " </td>\n            <td>" + interactions.Offers.name + " </td>\n            <td>" + interactions.Offers.conversion.amount + " </td>\n            <td>" + interactions.hasConversion + " </td>\n            <td>" + interactions.TrafficSourceClickID + " </td>\n            <td>" + interactions.Campaign.CPC + " </td>\n            <td>" + interactions.Campaign.MediaBuyer.firstName + " &nbsp " + interactions.Campaign.MediaBuyer.lastName + " </td>\n            <td>" + interactions.Visitor.ip_address + " </td>\n            <td>" + interactions.server_region + " </td>\n            <td>" + interactions.Visitor.geo_location.country_name + " </td>\n            <td>" + interactions.Visitor.geo_location.region_name + " </td>\n            <td>" + interactions.Visitor.geo_location.city_name + " </td>\n            <td>" + interactions.Visitor.geo_location.coords.time_zone + " </td>\n            <td>" + interactions.Visitor.geo_location.isp + " </td>\n            <td>" + interactions.Visitor.geo_location.connection_type + " </td>\n            <td>" + interactions.Visitor.geo_location.organization + " </td>\n            <td>" + interactions.Visitor.device.userAgent + " </td>\n            <td>" + interactions.Visitor.incomming_url + " </td>\n            <td>" + interactions.Visitor.device.browser + " </td>\n            <td>" + interactions.Visitor.device.OS.family + " </td>\n            <td>" + interactions.Visitor.device.OS.version + " </td>\n            <td>" + interactions.Visitor.device.OS.vendor + " </td>\n            <td>" + interactions.Visitor.device.type + " </td>\n            <td>" + interactions.Visitor.device.hardware.model + " </td>\n            <td><a href=\"/interactions/" + interactions._id + "\"> Edit <span class=\"glyphicon glyphicon-pencil\"></span> </a> </td>\n            <td><form action=\"/interactions/" + interactions._id + "?_method=DELETE\" method=\"POST\">\n                    <input type=\"hidden\" name=\"_method\" value=\"DELETE\">\n                    <button type=\"submit\" class=\"btn btn-danger btn-sm\"> Delete</button>\n                </form>\n            </td>\n        </tr>        \n        ";
    }
}
add.addEventListener("click", function add() {
    var data = newInteraction;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/', options).then(function (response) {
        var data = JSON.parse(response.json());
        console.log(data);
    })["catch"](function (error) {
        return console.error('Error', error);
    })
        .then(function (response) { return console.log('Success:', response); });
    document.getElementById('myForm').reset();
    setTimeout("document.location=document.location", 2000);
});
/* update.addEventListener("click",function update(){
    
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
})
 */
