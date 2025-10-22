const fs = require('fs');
const data = fs.readFileSync('file.txt');

//A conexão é bloqueada até o arquivo ser lido
console.log(data.toString());
