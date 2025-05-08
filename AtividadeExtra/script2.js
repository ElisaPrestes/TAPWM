function somarValor() {
    let numerosColetados = [];
    let total = 0;

    for (let i = 0; i < 3; i++) { 
        let valorString = prompt("Digite o valor para a posição " + (i+1) + ":");
        let valorNum = parseFloat(valorString);

        numerosColetados.push(valorNum);
    }

    for (let i = 0; i < numerosColetados.length; i++) {
        total += numerosColetados[i];
    }

    return total;
}

let arr1Global = []; 

let resultado = somarValor.apply(10, arr1Global);

alert("A soma dos valores digitados é: " + resultado);