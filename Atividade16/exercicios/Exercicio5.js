let eventos = require("events"); //Atribuição da classe EventEmitter 
let EmissorEventos = eventos.EventEmitter;//Variável faz referência à classe EventEmitter
let ee = new EmissorEventos();


//let ee = new eventos.EventEmitter();
//Acima temos uma boa prática que também funciona


ee.on('dados', function(fecha){
    console.log(fecha);
})


ee.emit('dados', 'primeira vez ' + Date.now());

setInterval(function(){
    ee.emit('dados', Date.now());
},500);



