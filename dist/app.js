"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const method_override_1 = __importDefault(require("method-override"));
const config_1 = __importDefault(require("./config/config"));
const app = express_1.default();
const routeJWT = express_1.default.Router();
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials')
}));
app.set('view engine', '.hbs');
app.set('jwtSecret', config_1.default.jwtSecret);
routeJWT.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, app.get('jwtSecret'), (err, user) => {
            if (err) {
                return res.json({ message: 'Token Invalid' });
            }
            else {
                req.user = user;
                next();
            }
        });
    }
    else {
        res.send({
            message: 'Token Not Provided'
        });
    }
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
app.use(method_override_1.default('_method'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/', require('./routes/interactions'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/secure', routeJWT, (req, res) => {
    const data = [
        { id: 1, name: "Will" },
        { id: 2, name: "Jean" },
        { id: 3, name: "Fred" }
    ];
    res.json(data);
});
exports.default = app;
