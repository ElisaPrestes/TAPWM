/*module.exports = function (app) {
    app.get('/professores', function (req, res) {
        //res.send("<html><body>Professores da FATEC Sorocaba</body></html>")
        res.render("informacao/professores")
    });
}*/


module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
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
  
      async function getProfessores() {
          try {
              const pool = await sql.connect(sqlConfig);
          
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