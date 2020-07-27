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
        name: any,
        shedule_type: string        
    };
    RuleFilter: {
        name: string
    };
    Visitor: {
        Tokens: {
            name: string,
            paramater: string,
            value: string,
            _id: string
        },
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
        Campaign: {
            name: (document.getElementById('Campaign') as HTMLInputElement).value,
            CPC: (document.getElementById('CPC') as HTMLInputElement).value,
            MediaBuyer: {
                firstName: (document.getElementById('MediaBuyerFirst') as HTMLInputElement).value,
                lastName: (document.getElementById('MediaBuyerLast') as HTMLInputElement).value,
            }
        }, 
        TrafficSource: {
            name:(document.getElementById('TrafficSource') as HTMLInputElement).value
        }, 
        LandingPage: {
            name: (document.getElementById('LandingPage') as HTMLInputElement).value
        },
        Rotation: {
            name: (document.getElementById('Rotation') as HTMLInputElement).value
        }, 
        Offers: {
            name: (document.getElementById('Offers') as HTMLInputElement).value,
            affiliate: {
                name: (document.getElementById('Affiliate') as HTMLInputElement).value
            },
            conversion: {
                amount:(document.getElementById('Revenue') as HTMLInputElement).value
            } 
        }, 
        Rule: {
            name: (document.getElementById('Rule') as HTMLInputElement).value,
            shedule_type: (document.getElementById('RuleShedule') as HTMLInputElement).value
        }, 
        RuleFilter: {
            name: (document.getElementById('RuleFilter') as HTMLInputElement).value
        },        
        Visitor: {
            Tokens: {
                name: (document.getElementById('TokenName') as HTMLInputElement).value,
                paramater: (document.getElementById('TokenParameter') as HTMLInputElement).value,
                value: (document.getElementById('TokenValue') as HTMLInputElement).value,
                _id: (document.getElementById('TokenId') as HTMLInputElement).value
            },
            ip_address: (document.getElementById('IpAddress') as HTMLInputElement).value,
            geo_location: {
                country_name: (document.getElementById('Country') as HTMLInputElement).value,
                region_name: (document.getElementById('RegionName') as HTMLInputElement).value,
                city_name: (document.getElementById('City') as HTMLInputElement).value,
                coords: {
                    time_zone: (document.getElementById('Coords') as HTMLInputElement).value
                },
                isp: (document.getElementById('ISP') as HTMLInputElement).value,
                organization: (document.getElementById('Organization') as HTMLInputElement).value,
                connection_type: (document.getElementById('ConnectionType') as HTMLInputElement).value
            },
            device: {
                userAgent: (document.getElementById('UserAgent') as HTMLInputElement).value,
                browser: (document.getElementById('Browser') as HTMLInputElement).value,
                OS: {
                    family: (document.getElementById('OS') as HTMLInputElement).value,
                    version: (document.getElementById('OSVersion') as HTMLInputElement).value,
                    vendor: (document.getElementById('DeviceVendor') as HTMLInputElement).value,
                },
                type: (document.getElementById('DeviceType') as HTMLInputElement).value,
                hardware: {
                    model: (document.getElementById('DeviceModel') as HTMLInputElement).value 
                }
            },
            incomming_url: (document.getElementById('IncommingUrl') as HTMLInputElement).value          
        },               
        hasConversion: (document.getElementById('Converted') as HTMLInputElement).value,
        TrafficSourceClickID: (document.getElementById('TrafficSourceClickID') as HTMLInputElement).value,  
        server_region: (document.getElementById('ServerBy') as HTMLInputElement).value  
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
    ]
    var i = 0;    
    var tr = document.createElement("tr");
   
    for (i = 0; i < Int.length; i++) {
        var td = document.createElement("td");
        td.innerHTML = (Int[i]);        
        tr.appendChild(td);
        document.getElementById("myTable").appendChild(tr);        
    } 
        if (i == Int.length) {             
            var btn= document.createElement("button");
            btn.type= "button";
            btn.innerText= "Modificar";
            btn.id = "btnEdit"; 
            btn.onclick = function(){                
                var row = btn.parentNode.parentNode;
                (document.getElementById('CreatedOn') as HTMLInputElement).value = row.children[0].innerHTML;
                (document.getElementById('InteractionID') as HTMLInputElement).value = row.children[1].innerHTML;
                (document.getElementById('Campaign') as HTMLInputElement).value = row.children[2].innerHTML;
                (document.getElementById('CPC') as HTMLInputElement).value = row.children[18].innerHTML;
                (document.getElementById('MediaBuyerFirst') as HTMLInputElement).value = row.children[19].innerHTML;
                (document.getElementById('MediaBuyerLast') as HTMLInputElement).value = row.children[20].innerHTML;
                (document.getElementById('TrafficSource') as HTMLInputElement).value = row.children[3].innerHTML;
                (document.getElementById('LandingPage') as HTMLInputElement).value = row.children[4].innerHTML;
                (document.getElementById('Rotation') as HTMLInputElement).value = row.children[5].innerHTML;
                (document.getElementById('Offers') as HTMLInputElement).value = row.children[14].innerHTML;
                (document.getElementById('Affiliate') as HTMLInputElement).value = row.children[6].innerHTML;
                (document.getElementById('Revenue') as HTMLInputElement).value = row.children[15].innerHTML;
                (document.getElementById('Rule') as HTMLInputElement).value = row.children[7].innerHTML;
                (document.getElementById('RuleShedule') as HTMLInputElement).value = row.children[9].innerHTML;
                (document.getElementById('RuleFilter') as HTMLInputElement).value = row.children[8].innerHTML;
                (document.getElementById('TokenName') as HTMLInputElement).value = row.children[10].innerHTML;
                (document.getElementById('TokenParameter') as HTMLInputElement).value = row.children[11].innerHTML;
                (document.getElementById('TokenValue') as HTMLInputElement).value = row.children[12].innerHTML;
                (document.getElementById('TokenId') as HTMLInputElement).value = row.children[13].innerHTML;
                (document.getElementById('IpAddress') as HTMLInputElement).value = row.children[21].innerHTML;
                (document.getElementById('Country') as HTMLInputElement).value = row.children[23].innerHTML;
                (document.getElementById('RegionName') as HTMLInputElement).value = row.children[24].innerHTML;
                (document.getElementById('City') as HTMLInputElement).value = row.children[25].innerHTML;
                (document.getElementById('Coords') as HTMLInputElement).value = row.children[26].innerHTML;
                (document.getElementById('ISP') as HTMLInputElement).value = row.children[27].innerHTML;
                (document.getElementById('Organization') as HTMLInputElement).value = row.children[29].innerHTML;
                (document.getElementById('ConnectionType') as HTMLInputElement).value = row.children[28].innerHTML;
                (document.getElementById('UserAgent') as HTMLInputElement).value = row.children[30].innerHTML;
                (document.getElementById('Browser') as HTMLInputElement).value = row.children[32].innerHTML;
                (document.getElementById('OS') as HTMLInputElement).value = row.children[33].innerHTML;
                (document.getElementById('OSVersion') as HTMLInputElement).value = row.children[34].innerHTML;
                (document.getElementById('DeviceVendor') as HTMLInputElement).value = row.children[35].innerHTML;
                (document.getElementById('DeviceType') as HTMLInputElement).value = row.children[36].innerHTML;
                (document.getElementById('DeviceModel') as HTMLInputElement).value = row.children[37].innerHTML;
                (document.getElementById('IncommingUrl') as HTMLInputElement).value = row.children[31].innerHTML;
                (document.getElementById('Converted') as HTMLInputElement).value = row.children[16].innerHTML;
                (document.getElementById('TrafficSourceClickID') as HTMLInputElement).value = row.children[17].innerHTML;
                (document.getElementById('ServerBy') as HTMLInputElement).value = row.children[22].innerHTML;              
                row.parentNode.removeChild(row);
            }           
            var td3 = document.createElement("td");
            td3.appendChild(btn);  
            tr.appendChild(td3);                  
            document.getElementById("myTable").appendChild(tr);

            var btn= document.createElement("button");
            btn.type= "button";
            btn.innerText= "Eliminar";
            btn.id = "btnDel"; 
            btn.onclick = function(){
                var row = btn.parentNode.parentNode;
                row.parentNode.removeChild(row);
            }           
            var td2 = document.createElement("td");
            td2.appendChild(btn);  
            tr.appendChild(td2);                  
            document.getElementById("myTable").appendChild(tr);
        }
    
        (document.getElementById('myForm') as HTMLFormElement).reset();
})

