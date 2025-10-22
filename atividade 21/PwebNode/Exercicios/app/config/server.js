let express = require('express');
let consign = require('consign');

//let texto = require("./modulo1");
let app = express();
app.set('view engine', 'ejs');

consign().include('app/routes').into(app);
app.set('views','app/views');
module.exports = app;
consign({cwd:'app'})
    .include('routes')
    .then('Config/dbConnection.js')
    .into(app);
    
// o consign procura por todos os arquivos js dentro da pasta routes