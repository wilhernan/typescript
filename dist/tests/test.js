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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Get Endpoints', () => {
    it('gets the test endpoint', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(server_1.default).get('/interactions');
        expect(res.status).toBe(200);
        expect(res.body);
        done();
    }));
    it('Should save interaction to database', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(server_1.default)
            .post('/interactions')
            .send({
            CreatedOn: '2020-09-10',
            InteractionID: '980cf1d4-016e-42a0-b30d-c5720bfefa0b',
            Campaign: { name: 'Life Insurance US - SMART - Audience - All O/S - tCPA', CPC: 0.14895564176379722, MediaBuyer: { firstName: 'Dena', lastName: 'Ragheb' } },
            TrafficSource: { name: 'Google Display - Basha' },
            LandingPage: { name: 'PaginFinDig - v4 - Happy Couple Img - No "Free Insurance" - w/no ins - Life USa Landing' },
            Rotation: { name: 'Life Insurance - US' },
            Offers: { name: 'National Family Life - 1:1 - Common', affiliate: { name: 'Common Acquire' }, conversion: { amount: 8.5 } },
            Rule: { name: 'Default-No Rules Apply', shedule_type: 'no_schedule' },
            RuleFilter: { name: 'Basha - All' },
            Visitor: { Tokens: { name: 'Ad Image', parameter: 'adi', value: 'ssadmin', id: '5754ab7722bbf9b75a799672' },
                ip_address: '107.77.245.34',
                geo_location: {
                    country_name: 'United States', region_name: 'Arizona', city_name: 'Phoenix', coords: { time_zone: 'America/Phoenix' }, isp: 'AT&T Wireless', organization: 'AT&T Wireless', connection_type: 'Cellular'
                },
                device: {
                    userAgent: 'Mozilla/5.0 (Linux; Android 9; U304AA) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.92 Mobile Safari/537.36', browser: 'Chrome Mobile', OS: { family: 'Android', version: '9.0', vendor: 'Google' }, type: 'Phone', hardware: { model: 'U304AA' }
                },
                incomming_url: '/atlanta/lifeus-5f174965809de600117299ac/visitors/5cd5d9ed85e7992c67f59d3d/5f174965809de600117299ac/incoming?adi=ssadmin&adh=bornb469&plc=mobileapp%3A%3A2-com.solitaire.klondike.patience.ocean.aquarium&adgrp=life-agb94&adid=450970994636&ckw=&cadid={AD_ID}&targ=95011&addet=ssadmin-bornb469-sennolifepayday_2020&add=sennolifepayday_2020&gclid=CjwKCAjw19z6BRAYEiwAmo64LZeCe4KoJikGRnkqWei1D72jS4k4TGMne5dkgB2ugG463eJlZvYcTRoCfAYQAvD_BwE'
            },
            hasConversion: true,
            TrafficSourceClickID: '5cd5d9ed85e7992c67f59d3d',
            server_region: 'us-west-2'
        });
        done();
    }));
    it('Should fetch by Id', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const postId = '5f28887f7d5c0834b82eb3a0';
        const res = yield supertest_1.default(server_1.default).get(`/interactions/${postId}`);
        expect(res.status).toBe(200);
        expect(res.body);
        done();
    }));
    it('Should Update by Id', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const postId = '5f403801567a835b40dd47ae';
        const res = yield supertest_1.default(server_1.default)
            .put(`/interactions/${postId}`)
            .send({
            CreatedOn: '2020-08-20',
            InteractionID: 'InteractionID',
            Campaign: { name: 'Campaña', CPC: 24, MediaBuyer: { firstName: 'Primera', lastName: 'Prueba' } },
            TrafficSource: { name: 'Trafico' },
            LandingPage: { name: 'Pagina Landing' },
            Rotation: { name: 'Rotation' },
            Offers: { name: 'Oferta', affiliate: { name: 'Afiliados' }, conversion: { amount: 35 } },
            Rule: { name: 'Regla', shedule_type: 'Regla Programada' },
            RuleFilter: { name: 'Regla Filtrada' },
            Visitor: { Tokens: { name: 'Token Name', parameter: 'Token Parameter', value: 'Token Value', id: 'Token Id' },
                ip_address: 'Dirección IP',
                geo_location: {
                    country_name: 'Nombre País', region_name: 'Nombre de la Region', city_name: 'Nombre Ciudad', coords: { time_zone: 'Coordenadas' }, isp: 'ISP', organization: 'Organización', connection_type: 'Tipo de Conección'
                },
                device: {
                    userAgent: 'Agente Usuario', browser: 'Navegator', OS: { family: 'Win', version: '10', vendor: 'Microsoft' }, type: 'PC', hardware: { model: 'Mac' }
                },
                incomming_url: 'www.pc.com'
            },
            hasConversion: true,
            TrafficSourceClickID: 'Trafico Fuente',
            server_region: 'CARACAS FC'
        });
        expect(res.status).toBe(200);
        expect(res.body);
        done();
    }));
    it('should delete a post', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const postId = '5f3ee3f938ad7b3978e8708b';
        const res = yield supertest_1.default(server_1.default).delete(`/interactions/${postId}`);
        expect(res.status).toBe(200);
        done();
    }));
});
