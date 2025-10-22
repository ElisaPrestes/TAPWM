module.exports = function (app) {
    app.get('informacao/cursos', function (req, res) {
        //res.send("<html><body>Cursos da FATEC Sorocaba</body></html>")
        res.render("informacao/cursos");
    });
}