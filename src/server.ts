import app from './app';
import './database';


app.listen(app.get('port'), (error: Error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server on port`, app.get('port'));
});

export default app;