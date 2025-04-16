let pedraM, papelM, tesouraM;
let pedraJ, papelJ, tesouraJ;
let vitoria = 0;
let empate = 0;
let derrota = 0;
let escolhaM, escolhaJ;
let textEscolhaM;
const resultadoDiv = document.getElementById('resultado');
const placarDiv = document.getElementById('placar');

function jogar(escolhaDoJogador) {
    escolhaJ = escolhaDoJogador.toLowerCase();

    pedraJ = 0;
    papelJ = 0;
    tesouraJ = 0;

    if (escolhaJ === "pedra") {
        pedraJ = 1;
    } else if (escolhaJ === "papel") {
        papelJ = 1;
    } else if (escolhaJ === "tesoura") {
        tesouraJ = 1;
    } else {
        resultadoDiv.textContent = "Escolha inválida!";
        return;
    }

    // Lógica para a escolha da máquina
    escolhaM = Math.floor(Math.random() * 3) + 1;
    pedraM = 0;
    papelM = 0;
    tesouraM = 0;
    if (escolhaM === 1) {
        pedraM = 1;
        textEscolhaM = "Pedra";
    } else if (escolhaM === 2) {
        papelM = 1;
        textEscolhaM = "Papel";
    } else {
        tesouraM = 1;
        textEscolhaM = "Tesoura";
    }

    let resultadoRound = "";

    // Lógica para determinar o vencedor da rodada
    if (pedraJ === 1 && papelM === 1) {
        derrota++;
        resultadoRound = `Você perdeu! Você escolheu Pedra e a máquina escolheu Papel.`;
    } else if (pedraJ === 1 && pedraM === 1) {
        empate++;
        resultadoRound = `Empate! Você escolheu Pedra e a máquina escolheu Pedra.`;
    } else if (pedraJ === 1 && tesouraM === 1) {
        vitoria++;
        resultadoRound = `Você ganhou! Você escolheu Pedra e a máquina escolheu Tesoura.`;
    } else if (papelJ === 1 && pedraM === 1) {
        vitoria++;
        resultadoRound = `Você ganhou! Você escolheu Papel e a máquina escolheu Pedra.`;
    } else if (papelJ === 1 && papelM === 1) {
        empate++;
        resultadoRound = `Empate! Você escolheu Papel e a máquina escolheu Papel.`;
    } else if (papelJ === 1 && tesouraM === 1) {
        derrota++;
        resultadoRound = `Você perdeu! Você escolheu Papel e a máquina escolheu Tesoura.`;
    } else if (tesouraJ === 1 && papelM === 1) {
        vitoria++;
        resultadoRound = `Você ganhou! Você escolheu Tesoura e a máquina escolheu Papel.`;
    } else if (tesouraJ === 1 && tesouraM === 1) {
        empate++;
        resultadoRound = `Empate! Você escolheu Tesoura e a máquina escolheu Tesoura.`;
    } else if (tesouraJ === 1 && pedraM === 1) {
        derrota++;
        resultadoRound = `Você perdeu! Você escolheu Tesoura e a máquina escolheu Pedra.`;
    }

    resultadoDiv.textContent = resultadoRound;
    atualizarPlacar();
}

function atualizarPlacar() {
    placarDiv.textContent = `Vitórias: ${vitoria} | Empates: ${empate} | Derrotas: ${derrota}`;
}

atualizarPlacar();