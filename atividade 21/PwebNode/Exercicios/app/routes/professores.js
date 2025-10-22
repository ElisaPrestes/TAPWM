/*module.exports = function (app) {
    app.get('/professores', function (req, res) {
        //res.send("<html><body>Professores da FATEC Sorocaba</body></html>")
        res.render("informacao/professores")
    });
}*/
// let dbConnection = require('../config/dbConnection');

module.exports = function(app){
   app.get('/informacao/professores', function(req,res){

    //    const sql = require ('mssql');
 
      async function getProfessores() {
          try {
            let connection = app.config.dbConnection;
            const pool = await connection();
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
              // res.json(results.recordset);
 
              res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}