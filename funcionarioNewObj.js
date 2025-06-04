// funcionario3.js
function  mostrarFuncionarioNewObject() { 
     //Utilizando new Object()
    let funcionario1 = new Object();
    funcionario1.matricula = 123021;
    funcionario1.nome = 'Lipe';
    funcionario1.funcao = 'Presidente da Azul';

    alert("Objeto de funcionario3.js (com new Object):\n" + JSON.stringify(funcionario1, null, 2));
}