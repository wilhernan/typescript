"use strict";
exports.__esModule = true;
var add = document.getElementById('adicionar');
var update = document.getElementById('editar');
var Revenue = document.getElementById('Revenue').value;
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
update.addEventListener("click", function update() {
    var data = newInteraction;
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/edit/', options).then(function (response) {
        var data = JSON.parse(response.json());
        console.log(data);
    })["catch"](function (error) {
        return console.error('Error', error);
    })
        .then(function (response) { return console.log('Success:', response); });
});
