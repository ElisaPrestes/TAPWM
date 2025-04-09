alert("Vamos calcular a média das suas notas!");

let nome = prompt("Qual seu nome?");

let nota1 = parseFloat(prompt("Insira a primeira nota"));
let nota2 = parseFloat(prompt("Insira a segunda nota"));
let nota3 = parseFloat(prompt("Insira a terceira nota"));

let media = (nota1 + nota2 + nota3) / 3;

alert("Nome: " + nome);
alert("Média das notas: " + media.toFixed(2));
//alert("Resultado: " + (media >= 6 ? "Aprovado" : "Reprovado"));

alert("Para calcular as operações matemáticas, clique em OK!");
window.location.href = "./operacoes.html";


