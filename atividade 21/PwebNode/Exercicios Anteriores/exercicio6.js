let http = require('http');

let server = http.createServer(function(req,res){
    res.end("<html><body>Site da FATEC Soocaba</body></html>");
});

server.listen(3000);