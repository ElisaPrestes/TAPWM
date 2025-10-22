let http = require('http');

let server = http.createServer(function(req,res){
    let opcao = req.url; // Pegando a url da requisição 

    if(opcao == '/historia'){
        res.end("<html><body>História da FATEC Soocaba</body></html>");
    }

    else if(opcao =='/cursos'){
        res.end("<html><body>Cursos</body></html>");
    }

    else if(opcao =='/professores'){
        res.end("<html><body>Professores</body></html>")
    }

     else{
        res.end("<html><body>Site da FATEC Sorocaba</body></html>")
    }
});

server.listen(3000);