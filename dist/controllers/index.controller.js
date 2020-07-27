"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexControler {
    index(req, res) {
        res.render('index', { title: 'Reporte Interactions' });
    }
}
exports.indexController = new IndexControler();
