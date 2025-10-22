module.exports = function(app){
    app.get('/informacao/professores/detalhaprofessor', function(req,res){
        async function getProfessoresID() {
            try {
                let connection = app.config.dbConnection;
                const pool = await connection();
                const results = await pool.request().query('SELECT * FROM professores WHERE id_professor = 1') // atenção para funcionar tem que existem o professor com esse ID
                res.render('informacao/professores/detalhaprofessor',{profs :  results.recordset});
            } catch (err) {
                console.log(err)
            }
        }  
    getProfessoresID();
    });
}
