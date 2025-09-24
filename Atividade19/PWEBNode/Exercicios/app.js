let app = require('./app/config/server');
//carregando o módulo do servidor

let rotaHome = require('./app/routes/home'); //só está definindo as rotas
rotaHome(app)//está executando

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); //só está definindo as rotas
rotaAdicionarUsuario(app)//está executando

let rotaHistoria = require('./app/routes/historia'); //só está definindo as rotas
rotaHistoria(app)//está executando

let rotaProfessores = require('./app/routes/professores'); //só está definindo as rotas
rotaProfessores(app)//está executando

let rotaCursos = require('./app/routes/cursos'); //só está definindo as rotas
rotaCursos(app)//está executando



app.listen(3000, function(){
    console.log("Servidor iniciado");
});

