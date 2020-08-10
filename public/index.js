var add = document.getElementById('adicionar');
var Revenue = document.getElementById('Revenue').value;
var edit = document.getElementById('update');
var tbody = (document.querySelector('#tBody'));
var Converted = false;
if (Revenue > 0) {
    Converted = true;
}
;
fetch('/interactions')
    .then(function (response) {
    return response.json();
})
    .then(function (interactions) {
    table(interactions);
});
function table(interactions) {
    tbody.innerHTML = '';
    interactions.forEach(function (interaction) {
        tbody.innerHTML += "\n        <tr " + interaction._id + " >                    \n            <td>" + interaction.CreatedOn + "</td>\n            <td>" + interaction.InteractionID + " </td>\n            <td>" + interaction.Campaign.name + " </td>\n            <td>" + interaction.TrafficSource.name + " </td>\n            <td>" + interaction.LandingPage.name + " </td>\n            <td>" + interaction.Rotation.name + " </td>\n            <td>" + interaction.Offers.affiliate.name + " </td>\n            <td>" + interaction.Rule.name + " </td>\n            <td>" + interaction.RuleFilter.name + " </td>\n            <td>" + interaction.Rule.shedule_type + " </td>\n            <td>" + interaction.Visitor.Tokens.name + " </td>\n            <td>" + interaction.Visitor.Tokens.parameter + " </td>\n            <td>" + interaction.Visitor.Tokens.value + " </td>\n            <td>" + interaction.Visitor.Tokens.id + " </td>\n            <td>" + interaction.Offers.name + " </td>\n            <td>" + interaction.Offers.conversion.amount + " </td>\n            <td>" + interaction.hasConversion + " </td>\n            <td>" + interaction.TrafficSourceClickID + " </td>\n            <td>" + interaction.Campaign.CPC + " </td>\n            <td>" + interaction.Campaign.MediaBuyer.firstName + " &nbsp " + interaction.Campaign.MediaBuyer.lastName + " </td>\n            <td>" + interaction.Visitor.ip_address + " </td>\n            <td>" + interaction.server_region + " </td>\n            <td>" + interaction.Visitor.geo_location.country_name + " </td>\n            <td>" + interaction.Visitor.geo_location.region_name + " </td>\n            <td>" + interaction.Visitor.geo_location.city_name + " </td>\n            <td>" + interaction.Visitor.geo_location.coords.time_zone + " </td>\n            <td>" + interaction.Visitor.geo_location.isp + " </td>\n            <td>" + interaction.Visitor.geo_location.connection_type + " </td>\n            <td>" + interaction.Visitor.geo_location.organization + " </td>\n            <td>" + interaction.Visitor.device.userAgent + " </td>\n            <td>" + interaction.Visitor.incomming_url + " </td>\n            <td>" + interaction.Visitor.device.browser + " </td>\n            <td>" + interaction.Visitor.device.OS.family + " </td>\n            <td>" + interaction.Visitor.device.OS.version + " </td>\n            <td>" + interaction.Visitor.device.OS.vendor + " </td>\n            <td>" + interaction.Visitor.device.type + " </td>\n            <td>" + interaction.Visitor.device.hardware.model + " </td>\n            <td>                               \n                <button type=\"submit\" class=\"editButton btn btn-primary btn-sm\"> Update</button>                           \n            </td>\n            <td>\n                <button type=\"submit\" class=\"deleteButton btn btn-danger btn-sm\"> Delete</button>                \n            </td>\n        </tr>        \n        ";
    });
}
document.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;
    if (target && target.className === "editButton btn btn-primary btn-sm") {
        var interactionID = target.closest('tr').attributes.item(0).name;
        fetch('/interactions/' + interactionID)
            .then(function (response) {
            return response.json();
        })
            .then(function (interaction) {
            console.log(interaction);
            update(interaction);
        });
    }
    else {
        if (target && target.className === "deleteButton btn btn-danger btn-sm") {
            var interactionID = target.closest('tr').attributes.item(0).name;
            fetch('/interactions/' + interactionID, { method: 'DELETE' })
                .then(function (response) {
                response.json();
            })
                .then(function (interaction) { return console.log(interaction); });
            setTimeout("document.location=document.location", 2000);
        }
    }
});
function update(interaction) {
    document.getElementById("update").attributes.item = interaction._id;
    document.getElementById("CreatedOn").value = interaction.CreatedOn;
    document.getElementById("InteractionID").value = interaction.InteractionID;
    document.getElementById("Campaign").value = interaction.Campaign.name;
    document.getElementById("CPC").value = interaction.Campaign.CPC;
    document.getElementById("MediaBuyerFirst").value = interaction.Campaign.MediaBuyer.firstName;
    document.getElementById("MediaBuyerLast").value = interaction.Campaign.MediaBuyer.lastName;
    document.getElementById("TrafficSource").value = interaction.TrafficSource.name;
    document.getElementById("LandingPage").value = interaction.LandingPage.name;
    document.getElementById("Rotation").value = interaction.Rotation.name;
    document.getElementById("Offers").value = interaction.Offers.name;
    document.getElementById("Affiliate").value = interaction.Offers.affiliate.name;
    document.getElementById("Rule").value = interaction.Rule.name;
    document.getElementById("RuleShedule").value = interaction.Rule.shedule_type;
    document.getElementById("RuleFilter").value = interaction.RuleFilter.name;
    document.getElementById("TokenName").value = interaction.Visitor.Tokens.name;
    document.getElementById("TokenParameter").value = interaction.Visitor.Tokens.parameter;
    document.getElementById("TokenValue").value = interaction.Visitor.Tokens.value;
    document.getElementById("TokenId").value = interaction.Visitor.Tokens.id;
    document.getElementById("IpAddress").value = interaction.Visitor.ip_address;
    document.getElementById("Country").value = interaction.Visitor.geo_location.country_name;
    document.getElementById("RegionName").value = interaction.Visitor.geo_location.region_name;
    document.getElementById("City").value = interaction.Visitor.geo_location.city_name;
    document.getElementById("Coords").value = interaction.Visitor.geo_location.coords.time_zone;
    document.getElementById("ISP").value = interaction.Visitor.geo_location.isp;
    document.getElementById("Organization").value = interaction.Visitor.geo_location.organization;
    document.getElementById("ConnectionType").value = interaction.Visitor.geo_location.connection_type;
    document.getElementById("UserAgent").value = interaction.Visitor.device.userAgent;
    document.getElementById("Browser").value = interaction.Visitor.device.browser;
    document.getElementById("OS").value = interaction.Visitor.device.OS.family;
    document.getElementById("OSVersion").value = interaction.Visitor.device.OS.version;
    document.getElementById("DeviceVendor").value = interaction.Visitor.device.OS.vendor;
    document.getElementById("DeviceType").value = interaction.Visitor.device.type;
    document.getElementById("DeviceModel").value = interaction.Visitor.device.hardware.model;
    document.getElementById("IncommingUrl").value = interaction.Visitor.incomming_url;
    document.getElementById("TrafficSourceClickID").value = interaction.TrafficSourceClickID;
    document.getElementById("ServerBy").value = interaction.server_region;
    document.getElementById("Revenue").value = interaction.Offers.conversion.amount;
}
add.addEventListener("click", function add() {
    var data = upload();
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/interactions', options)
        .then(function (response) {
        var data = response.json();
        console.log(data);
    })["catch"](function (error) {
        return console.error('Error', error);
    })
        .then(function (response) { return console.log('Success:', response); });
    document.getElementById('myForm').reset();
    setTimeout("document.location=document.location", 2000);
});
edit.addEventListener("click", function update() {
    var data = upload();
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/interactions/' + data._id, options)
        .then(function (response) {
        var data = response.json();
        console.log(data);
    })["catch"](function (error) {
        return console.error('Error', error);
    })
        .then(function (response) { return console.log('Success:', response); });
    document.getElementById('myForm').reset();
    setTimeout("document.location=document.location", 2000);
});
function upload() {
    var newInteraction;
    newInteraction = {
        _id: document.getElementById("update").attributes.item,
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
    return newInteraction;
}
