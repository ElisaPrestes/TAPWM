let sql = require('mssql');

let connSQLServer = function(){
    const sqlConfig = {
        user: 'BD2313018', //7 últimos dígitos do seu RA
        password: 'Teste1234',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de ocnexão com o bd');
    return connSQLServer;
}

