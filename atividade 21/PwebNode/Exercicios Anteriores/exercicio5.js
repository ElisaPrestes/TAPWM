let eventos = require('events'); //atribuição da classe EventEmitter a uma variavel 

let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();
// ou criando direto sem a variavel intermediaria 
//let ee = new eventos.EventEmitter();
//mas de forma anterior é uma boa prática

ee.on('dados', function(flecha){
    console.log(flecha);
});

ee.emit('dados', 'primeira vez' + Date.now());

setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);