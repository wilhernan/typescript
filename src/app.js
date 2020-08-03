"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const method_override_1 = __importDefault(require("method-override"));
const interactions_1 = __importDefault(require("./routes/interactions"));
class Aplication {
    constructor() {
        this.app = express_1.default();
        this.settings();
        this.middelwares();
        this.routes();
    }
    settings() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.engine('.hbs', express_handlebars_1.default({
            extname: '.hbs',
            defaultLayout: 'main',
            layoutsDir: path_1.default.join(this.app.get('views'), 'layouts'),
            partialsDir: path_1.default.join(this.app.get('views'), 'partials')
        }));
        this.app.set('view engine', '.hbs');
    }
    middelwares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(method_override_1.default('_method'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(function errorHandler (err, req, res, next) {
            res.status(500)
            res.render('error', { error: err })
          })
    }
    routes() {
        this.app.use('/', interactions_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}
exports.default = Aplication;
