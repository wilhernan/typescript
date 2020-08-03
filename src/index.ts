import express from "express";
import exphbs from "express-handlebars";
import path from 'path';
import morgan from "morgan";
import methodOverride from "method-override"; 
import cors from "cors";
//import bodyParser from "body-parser";

import './database';
import InteractionRoutes from './routes/interactions';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')    
}));
app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use('/', InteractionRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});