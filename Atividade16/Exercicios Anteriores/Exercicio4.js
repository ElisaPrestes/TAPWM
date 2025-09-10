// será mostrado como usar o sistema de arquivos para imprimir linhas

const fs = require('fs'); // carregando o módulo filesystem
const data = fs.readFileSync('file.txt');
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());