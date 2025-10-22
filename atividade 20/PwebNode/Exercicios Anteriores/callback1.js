const prompt = require('prompt-sync')();

function saudacao(nome){
    console.log('OI ' + nome);
}

function entradaNome(callback){
    let nome = prompt('Digite seu nome: ');
    callback(nome); //Chamando a função callback(saudação)
}

entradaNome(saudacao);