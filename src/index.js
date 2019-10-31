// modulos.
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 4001);

app.use(morgan('dev'));

app.use('/', express.static(__dirname + '/public'));

console.log(__dirname)

app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto: ',app.get('port'));
})