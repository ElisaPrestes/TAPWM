module.exports = function(app){

app.get('/informacao/professores', function(req, res){
    res.render("informacao/professores");
    // res.send("<html><body>Professores da Fatec Sorocaba</body></html>")
});
}