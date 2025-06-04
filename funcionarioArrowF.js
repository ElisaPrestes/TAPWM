// funcionario2.js
function mostrarFuncionarioArrowFunction() {
     //Utilizando arrow function
    const funcionario = (matricula, nome, funcao) => ({
        matricula: matricula,
        nome: nome,
        funcao: funcao
    });

 
    const funcionario1 = funcionario(
        120312, 
        'Bruna Elisa Prestes de Almeida', 
        'Diretora de TI'
    );

    alert("Objeto de funcionario2.js (criado por Arrow Function):\n" + 
          JSON.stringify(funcionario1, null, 2));
}