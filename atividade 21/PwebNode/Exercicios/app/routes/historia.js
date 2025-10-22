module.exports = function (app) {
    app.get('/historia', function (req, res) {
        //res.send("<html><body>História da FATEC Sorocaba</body></html>")
        res.render("informacao/historia");
    });
}