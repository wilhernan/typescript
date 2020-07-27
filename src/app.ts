import express from "express";
import exphbs from "express-handlebars";
import path from 'path';
import morgan from "morgan";
import cors from "cors";
import authRoutes from './routes/auth.routes'; 
import IndexRoutes from './routes'

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}));

app.set('view engine', '.hbs');

app.use('/', IndexRoutes);
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`The API is at:${app.get('port')}`)
});

app.use(authRoutes);

export default app;


