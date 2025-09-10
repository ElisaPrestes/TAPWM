// como acessar os argumentos da linha de comando através do objeto global process
// cada palavra vai ser um pedaço do array
let soma = 0;
for (let i = 2; i <= process.argv.length-1; i++){
    soma = soma+Number(process.argv[i]);
};
console.log("Soma = "+soma);