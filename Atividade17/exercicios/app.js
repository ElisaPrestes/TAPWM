let express = require('express'); //require carregammos o módulo
let texto = require('./modulo1')
let app = express(); //exec express
// let texto = "Observe que essa mensagem vem do módulo";
//module.exports = texto;



app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render("home/index");
})
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");    
})

app.get('/informacao/historia', function(req,res){
    res.render("informacao/historia");
})


app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores");
})

app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos");
})

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
    console.log(texto);
})