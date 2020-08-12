"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
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
    updateInteractionsTable(interactions);
});
function updateInteractionsTable(interactions) {
    tbody.innerHTML = '';
    interactions.forEach(function (interaction) {
        tbody.innerHTML += "\n        <tr id=" + interaction._id + " >                    \n            <td>" + interaction.CreatedOn + "</td>\n            <td>" + interaction.InteractionID + " </td>\n            <td>" + interaction.Campaign.name + " </td>\n            <td>" + interaction.TrafficSource.name + " </td>\n            <td>" + interaction.LandingPage.name + " </td>\n            <td>" + interaction.Rotation.name + " </td>\n            <td>" + interaction.Offers.affiliate.name + " </td>\n            <td>" + interaction.Rule.name + " </td>\n            <td>" + interaction.RuleFilter.name + " </td>\n            <td>" + interaction.Rule.shedule_type + " </td>\n            <td>" + interaction.Visitor.Tokens.name + " </td>\n            <td>" + interaction.Visitor.Tokens.parameter + " </td>\n            <td>" + interaction.Visitor.Tokens.value + " </td>\n            <td>" + interaction.Visitor.Tokens.id + " </td>\n            <td>" + interaction.Offers.name + " </td>\n            <td>" + interaction.Offers.conversion.amount + " </td>\n            <td>" + interaction.hasConversion + " </td>\n            <td>" + interaction.TrafficSourceClickID + " </td>\n            <td>" + interaction.Campaign.CPC + " </td>\n            <td>" + interaction.Campaign.MediaBuyer.firstName + " &nbsp " + interaction.Campaign.MediaBuyer.lastName + " </td>\n            <td>" + interaction.Visitor.ip_address + " </td>\n            <td>" + interaction.server_region + " </td>\n            <td>" + interaction.Visitor.geo_location.country_name + " </td>\n            <td>" + interaction.Visitor.geo_location.region_name + " </td>\n            <td>" + interaction.Visitor.geo_location.city_name + " </td>\n            <td>" + interaction.Visitor.geo_location.coords.time_zone + " </td>\n            <td>" + interaction.Visitor.geo_location.isp + " </td>\n            <td>" + interaction.Visitor.geo_location.connection_type + " </td>\n            <td>" + interaction.Visitor.geo_location.organization + " </td>\n            <td>" + interaction.Visitor.device.userAgent + " </td>\n            <td>" + interaction.Visitor.incomming_url + " </td>\n            <td>" + interaction.Visitor.device.browser + " </td>\n            <td>" + interaction.Visitor.device.OS.family + " </td>\n            <td>" + interaction.Visitor.device.OS.version + " </td>\n            <td>" + interaction.Visitor.device.OS.vendor + " </td>\n            <td>" + interaction.Visitor.device.type + " </td>\n            <td>" + interaction.Visitor.device.hardware.model + " </td>\n            <td>                               \n                <button type=\"submit\" class=\"editButton btn btn-primary btn-sm\"> Update</button>                           \n            </td>\n            <td>\n                <button type=\"submit\" class=\"deleteButton btn btn-danger btn-sm\"> Delete</button>                \n            </td>\n        </tr>        \n        ";
    });
}
document.addEventListener('click', function editAndDelete(e) {
    return __awaiter(this, void 0, void 0, function () {
        var target, interactionID, interactionID;
        return __generator(this, function (_a) {
            target = e.target;
            if (target && target.className === "editButton btn btn-primary btn-sm") {
                interactionID = target.closest('tr').getAttribute('id');
                fetch('/interactions/' + interactionID)
                    .then(function (response) {
                    return response.json();
                })["catch"](function (error) {
                    return console.error('Error', error);
                })
                    .then(function (interaction) {
                    console.log(interaction);
                    updateFormInputs(interaction);
                });
            }
            else {
                if (target && target.className === "deleteButton btn btn-danger btn-sm") {
                    interactionID = target.closest('tr').getAttribute('id');
                    fetch('/interactions/' + interactionID, { method: 'DELETE' })
                        .then(function (response) {
                        response.json();
                    })["catch"](function (error) {
                        return console.error('Error', error);
                    })
                        .then(function (interaction) { return console.log(interaction); });
                    updateInteractionsTable(interaction);
                    /* setTimeout("document.location=document.location", 2000); */
                }
            }
            return [2 /*return*/];
        });
    });
});
function updateFormInputs(Interaction) {
    document.getElementById("update").attributes.item = Interaction._id;
    document.getElementById("CreatedOn").value = Interaction.CreatedOn;
    document.getElementById("InteractionID").value = Interaction.InteractionID;
    document.getElementById("Campaign").value = Interaction.Campaign.name;
    document.getElementById("CPC").value = Interaction.Campaign.CPC;
    document.getElementById("MediaBuyerFirst").value = Interaction.Campaign.MediaBuyer.firstName;
    document.getElementById("MediaBuyerLast").value = Interaction.Campaign.MediaBuyer.lastName;
    document.getElementById("TrafficSource").value = Interaction.TrafficSource.name;
    document.getElementById("LandingPage").value = Interaction.LandingPage.name;
    document.getElementById("Rotation").value = Interaction.Rotation.name;
    document.getElementById("Offers").value = Interaction.Offers.name;
    document.getElementById("Affiliate").value = Interaction.Offers.affiliate.name;
    document.getElementById("Rule").value = Interaction.Rule.name;
    document.getElementById("RuleShedule").value = Interaction.Rule.shedule_type;
    document.getElementById("RuleFilter").value = Interaction.RuleFilter.name;
    document.getElementById("TokenName").value = Interaction.Visitor.Tokens.name;
    document.getElementById("TokenParameter").value = Interaction.Visitor.Tokens.parameter;
    document.getElementById("TokenValue").value = Interaction.Visitor.Tokens.value;
    document.getElementById("TokenId").value = Interaction.Visitor.Tokens.id;
    document.getElementById("IpAddress").value = Interaction.Visitor.ip_address;
    document.getElementById("Country").value = Interaction.Visitor.geo_location.country_name;
    document.getElementById("RegionName").value = Interaction.Visitor.geo_location.region_name;
    document.getElementById("City").value = Interaction.Visitor.geo_location.city_name;
    document.getElementById("Coords").value = Interaction.Visitor.geo_location.coords.time_zone;
    document.getElementById("ISP").value = Interaction.Visitor.geo_location.isp;
    document.getElementById("Organization").value = Interaction.Visitor.geo_location.organization;
    document.getElementById("ConnectionType").value = Interaction.Visitor.geo_location.connection_type;
    document.getElementById("UserAgent").value = Interaction.Visitor.device.userAgent;
    document.getElementById("Browser").value = Interaction.Visitor.device.browser;
    document.getElementById("OS").value = Interaction.Visitor.device.OS.family;
    document.getElementById("OSVersion").value = Interaction.Visitor.device.OS.version;
    document.getElementById("DeviceVendor").value = Interaction.Visitor.device.OS.vendor;
    document.getElementById("DeviceType").value = Interaction.Visitor.device.type;
    document.getElementById("DeviceModel").value = Interaction.Visitor.device.hardware.model;
    document.getElementById("IncommingUrl").value = Interaction.Visitor.incomming_url;
    document.getElementById("TrafficSourceClickID").value = Interaction.TrafficSourceClickID;
    document.getElementById("ServerBy").value = Interaction.server_region;
    document.getElementById("Revenue").value = Interaction.Offers.conversion.amount;
}
add.addEventListener("click", function addInteraction() {
    return __awaiter(this, void 0, void 0, function () {
        var data, options;
        return __generator(this, function (_a) {
            data = initializeInteraction();
            options = {
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
            updateInteractionsTable(data);
            document.getElementById('myForm').reset();
            return [2 /*return*/];
        });
    });
});
edit.addEventListener("click", function updateInteraction() {
    return __awaiter(this, void 0, void 0, function () {
        var data, options, response, interactions, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = initializeInteraction();
                    options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    };
                    return [4 /*yield*/, fetch('/interactions/' + data._id, options)];
                case 1:
                    response = _a.sent();
                    response.status == 200;
                    interactions = response.json();
                    console.log('Success:', response);
                    updateInteractionsTable(interactions);
                    document.getElementById('myForm').reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    alert(error_1.message);
                    console.error('Error', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
function initializeInteraction() {
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
