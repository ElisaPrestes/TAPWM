let express = require('express');
let app = express(); //exec express
app.get('/', function(req,res){
    res.send("<html><body>Bem-vinda ao Fatec Sorocaba</body></html>");
})
app.get('/historia', function(req,res){
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
})
app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");  
})
app.get('/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");  
})

app.listen(3000, function(){
    console.log("Servidor com express foi carregado");
})