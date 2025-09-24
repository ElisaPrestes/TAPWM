module.exports = function(app){
app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia");
    // res.send("<html><body>História da Fatec Sorocaba</body></html>")
});
}