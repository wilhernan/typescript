import express from "express";
import exphbs from "express-handlebars";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser"
import path from 'path';
import morgan from "morgan";
import methodOverride from "method-override"; 
import config from "./config/config";

const app = express();
const routeJWT = express.Router();
       
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')    
}));
app.set('view engine', '.hbs');
app.set('jwtSecret', config.jwtSecret);

routeJWT.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, app.get('jwtSecret'), (err, user) => {
            if(err){
                return res.json({ message: 'Token Invalid'});
            }else{
                req.user = user;
                next();
            }
        });
    }else{
        res.send({
            message: 'Token Not Provided'
        });
    }
});
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev')); 
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());             

app.use('/',  require('./routes/interactions'));            
app.use(express.static(path.join(__dirname, 'public')));

app.get('/secure', routeJWT, (req, res) => {
    const data = [
        { id: 1, name: "Will"},
        { id: 2, name: "Jean"},
        { id: 3, name: "Fred"}
    ]
    res.json(data);
}) 
 
export default app;