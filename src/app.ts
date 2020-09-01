import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser"
import path from 'path';
import morgan from "morgan";
import methodOverride from "method-override"; 
import jwt from "./middleware/jwt"
import errorHandler from "./middleware/errorHandler"
import config from "./config/config";

const app = express();

app.set('auth', process.env.SEED_AUTENTICACION || 'Its the seed of Dev');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts')   
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev')); 
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());   
app.use(jwt()); 

app.use('/',  require('./routes/interactions'));            
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler); 

export default app;