require('dotenv').config();
const app = require('./app.js');
require('./database');


async function main(){
    await  app.listen(app.get('port'));
    console.log('Servidor en el Puerto',app.get('port'));
}

main();