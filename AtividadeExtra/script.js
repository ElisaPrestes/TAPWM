
function soma() {
var array = [];
for (var i = 0; i <=2; i++) {
    var valor = parseFloat(prompt("Digite o valor para a posição " + (i+1) + ":"));
    // let valor = parseFloat(valorString);
    array[i] = valor
}
    var soma = this; //1º parâmetro
    for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
    }
    return soma;
    }
    //enviando um parâmetro no lugar do null
   
    alert(soma.apply(10, array));

    
// function soma() {
//     let soma = 0;
//     for (var i = 0; i < arguments.length; i++) {
//     soma += arguments[i];
//     }
//     alert(soma.apply(null,array));
// }
// // array.forEach(soma);
