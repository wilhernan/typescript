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
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials')
}));
app.set('view engine', '.hbs');
app.use(morgan_1.default('dev'));
app.use(method_override_1.default('_method'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/', require('./routes/interactions'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.default = app;
