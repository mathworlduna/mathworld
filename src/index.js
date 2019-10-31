// modulos.
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use('/', express.static(__dirname + '/public'));
console.log(__dirname)
app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto: ',app.get('port'));
})