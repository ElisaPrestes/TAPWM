let formNumeros = document.getElementById('formNumeros');
let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let num3Input = document.getElementById('num3');

if (formNumeros) {
    formNumeros.addEventListener('submit', function(e) {
        e.preventDefault();

        let valor1 = parseFloat(num1Input.value);
        let valor2 = parseFloat(num2Input.value);
        let valor3 = parseFloat(num3Input.value);

        if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            alert('Por favor, insira números válidos em todos os campos.');
            return;
        }

        alert('Valor 1: ' + valor1 + '\nValor 2: ' + valor2 + '\nValor 3: ' + valor3);
        alert("O maior valor é: " + Math.max(valor1, valor2, valor3));

        let numeros = [valor1, valor2, valor3];
        numeros.sort(function(a, b) {
            return a - b;
        });
        alert('Números em ordem crescente: ' + numeros.join(', '));
    });
}


let stringInput = document.getElementById('stringInput');
let checkPalindromeBtn = document.getElementById('checkPalindromeBtn');

if (checkPalindromeBtn) {
    checkPalindromeBtn.addEventListener('click', function() {
        let originalString = stringInput.value;

        if (!originalString.trim()) {
            alert('Por favor, digite uma palavra ou frase para verificar o palíndromo.');
            return;
        }

        let processedString = originalString.toLowerCase().replace(/\s+/g, '');
        let reversedString = processedString.split('').reverse().join('');

        if (processedString === reversedString) {
            alert('"' + originalString + '" É um palíndromo!');
        } else {
            alert('"' + originalString + '" NÃO é um palíndromo.');
        }
    });
}

let palavra1Input = document.getElementById('palavra1Input');
let palavra2Input = document.getElementById('palavra2Input');
let checkSubsetBtn = document.getElementById('checkSubsetBtn');

if (checkSubsetBtn) {
    checkSubsetBtn.addEventListener('click', function() {
        let palavra1 = palavra1Input.value;
        let palavra2 = palavra2Input.value;

        if (palavra1.trim() === '' || palavra2.trim() === '') {
            alert("erro");
            return;
        }

        if (palavra1.includes(palavra2)) {
            alert('"' + palavra2 + '" é um subconjunto de "' + palavra1 + '"');
        } else {
            alert('"' + palavra2 + '" não é um subconjunto de "' + palavra1 + '"');
        }
    });
}