import express from "express";
import exphbs from "express-handlebars";
import path from 'path';
import morgan from "morgan";
import methodOverride from "method-override"; 

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

app.use(morgan('dev')); 
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());             
  
app.use('/', require('./routes/interactions'));            
app.use(express.static(path.join(__dirname, 'public')));
 
export default app;