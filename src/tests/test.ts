"use strict"

import request from 'supertest';
import app  from '../server';


describe('Get Endpoints', () => {
    
  it('gets the test endpoint', async done => {
    const res = await request(app).get('/interactions');

    expect(res.status).toBe(200); 
    expect(res.body); 
    done();
  });

  it('Should save interaction to database', async done => {
    const res = await request(app)
        .post('/interactions')
        .send({
            CreatedOn: '2020-08-20',
            InteractionID: 'InteractionID',
            Campaign: {name: 'Campaña', CPC: 24, MediaBuyer: {firstName: 'Primera', lastName: 'Prueba'} },
            TrafficSource: {name: 'Trafico'},
            LandingPage: {name: 'Pagina Landing'},
            Rotation: {name: 'Rotation'},
            Offers: {name: 'Oferta', affiliate: {name: 'Afiliados'}, conversion: {amount: 35} },                 
            Rule: {name: 'Regla', shedule_type: 'Regla Programada'},
            RuleFilter: {name: 'Regla Filtrada'},
            Visitor: {Tokens: 
                {name: 'Token Name', parameter: 'Token Parameter', value: 'Token Value', id: 'Token Id'},
                ip_address: 'Dirección IP',
                geo_location: {
                    country_name: 'Nombre País', region_name: 'Nombre de la Region', city_name: 'Nombre Ciudad', coords: {time_zone: 'Coordenadas'}, isp: 'ISP', organization: 'Organización', connection_type: 'Tipo de Conección' 
                },
                device: {
                    userAgent: 'Agente Usuario', browser: 'Navegator', OS: { family: 'Win', version: '10', vendor: 'Microsoft'}, type: 'PC', hardware: {model: 'Mac'}
                },
                incomming_url: 'www.pc.com'
            },  
            hasConversion: true,
            TrafficSourceClickID: 'Trafico Fuente',
            server_region: 'CHELSEA'
        });
    done();
  });

  it('Should fetch by Id', async done => {
    const postId = '5f28887f7d5c0834b82eb3a0';
    const res = await request(app).get(`/interactions/${postId}`);
    expect(res.status).toBe(200);
    expect(res.body);
    done();
  });

  it('Should Update by Id', async done => {
    const postId = '5f403801567a835b40dd47ae';
    const res = await request(app)
        .put(`/interactions/${postId}`)
        .send({
            CreatedOn: '2020-08-20',
            InteractionID: 'InteractionID',
            Campaign: {name: 'Campaña', CPC: 24, MediaBuyer: {firstName: 'Primera', lastName: 'Prueba'} },
            TrafficSource: {name: 'Trafico'},
            LandingPage: {name: 'Pagina Landing'},
            Rotation: {name: 'Rotation'},
            Offers: {name: 'Oferta', affiliate: {name: 'Afiliados'}, conversion: {amount: 35} },                 
            Rule: {name: 'Regla', shedule_type: 'Regla Programada'},
            RuleFilter: {name: 'Regla Filtrada'},
            Visitor: {Tokens: 
                {name: 'Token Name', parameter: 'Token Parameter', value: 'Token Value', id: 'Token Id'},
                ip_address: 'Dirección IP',
                geo_location: {
                    country_name: 'Nombre País', region_name: 'Nombre de la Region', city_name: 'Nombre Ciudad', coords: {time_zone: 'Coordenadas'}, isp: 'ISP', organization: 'Organización', connection_type: 'Tipo de Conección' 
                },
                device: {
                    userAgent: 'Agente Usuario', browser: 'Navegator', OS: { family: 'Win', version: '10', vendor: 'Microsoft'}, type: 'PC', hardware: {model: 'Mac'}
                },
                incomming_url: 'www.pc.com'
            },  
            hasConversion: true,
            TrafficSourceClickID: 'Trafico Fuente',
            server_region: 'CARACAS FC'
        })
        
    expect(res.status).toBe(200);
    expect(res.body);
    done();
  });
    it('should delete a post', async done => {
        const postId = '5f3ee3f938ad7b3978e8708b';
        const res = await request(app).delete(`/interactions/${postId}`);
        
        expect(res.status).toBe(200);
        done();
    });
     
})