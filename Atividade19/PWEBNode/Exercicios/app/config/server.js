let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.set('views','./app/views'); //Diretório onde os arquivos estão localizados


module.exports = app;