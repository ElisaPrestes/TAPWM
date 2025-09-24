let express = require('express');
let texto = require('./modulo1');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index");
    // res.send("<html><body>Site da Fatec Sorocaba</body></html>")
});

app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("admin/adicionar_usuario");
    // res.send("<html><body>História da Fatec Sorocaba</body></html>")
});

app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia");
    // res.send("<html><body>História da Fatec Sorocaba</body></html>")
});

app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos");
    // res.send("<html><body>Cursos da Fatec Sorocaba</body></html>")
});

app.get('/informacao/professores', function(req, res){
    res.render("informacao/professores");
    // res.send("<html><body>Professores da Fatec Sorocaba</body></html>")
});

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
    console.log(texto);
});