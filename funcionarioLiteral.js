function mostrarFuncionarioLiteral(){
    //Utilizando a forma literal
    var funcionario1 = {
        matricula: '102535',
        nome: 'Luís Gatinho Glauser Lucas',
        funcao: 'secretario de TI'
    };
    alert("Objeto de funcionario1.js:\n" + JSON.stringify(funcionario1, null, 2));
}