module.exports = function (app) {
    app.get('/admin/adicionar_usuario', function (req, res) {
        // res.send("<html><body>Site da FATEC Sorocaba</body></html>");
        res.render("admin/adicionar_usuario");
    });
}