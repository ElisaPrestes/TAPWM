alert("Vamos calcular as operações matemáticas!");
let num1 = parseFloat(prompt("Insira o primeiro número"));
let num2 = parseFloat(prompt("Insira o segundo número"));


let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;



alert("Soma: " + num1 + " + " + num2 + " = " + soma);
alert("Subtração: " + num1 + " - " + num2 + " = " + subtracao);
alert("O produto de " + num1 + " e " + num2 + " é: " + produto);
alert("Divisão: " + num1 + " / " + num2 + " é: " + divisao);
alert("O produto de " + num1 + " e " + num2 + " é: " + produto);
alert("O resto da divisão de " + num1 + " por " + num2 + " é: " + resto);

alert("Para voltar a média de notas, clique em OK!");
window.location.href = "./index.html";