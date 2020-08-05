import express from "express";
import exphbs from "express-handlebars";
import path from 'path';
import morgan from "morgan";
import methodOverride from "method-override"; 



class Aplication {

    app: express.Application;
    
    constructor() {
        this.app = express();
        this.settings();
        this.middelwares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            extname: '.hbs',
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials')    
        }));
        this.app.set('view engine', '.hbs');
    }

    middelwares() {
        this.app.use(morgan('dev')); 
        this.app.use(methodOverride('_method'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json()); 
        this.app.use(function errorHandler(err, req, res, next) {
            console.log(err)
            res.status(500).send('Something Broke!!!');            
        })       
    }

    routes(){
        this.app.use('/', require('./routes/interactions'));       
        this.app.use(express.static(path.join(__dirname, 'public')));
    }


    start(): void {
        this.app.listen(this.app.get('port'), (error: Error) => {
            if (error) return console.log(`Error: ${error}`);
            console.log(`Server on port`, this.app.get('port'));
    });
    }
}

export default Aplication;