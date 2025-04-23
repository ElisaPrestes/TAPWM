const form = document.getElementById('nosferatuForm');
const graficoSexoCanvas = document.getElementById('graficoSexo');
const graficoIdadeCanvas = document.getElementById('graficoIdade');
const graficoOpiniaoCanvas = document.getElementById('graficoOpiniao');
const resultadosDiv = document.getElementById('resultados'); // Criar uma div no HTML para os resultados

let respostas = []; // Array para armazenar as respostas

let graficoSexoChart;
let graficoIdadeChart;
let graficoOpiniaoChart;

function atualizarGraficos() {
    // Gráfico de Sexo
    const contagemSexo = {};
    respostas.forEach(resposta => {
        contagemSexo[resposta.sexo] = (contagemSexo[resposta.sexo] || 0) + 1;
    });
    const labelsSexo = Object.keys(contagemSexo);
    const dataSexo = Object.values(contagemSexo);

    if (graficoSexoChart) {
        graficoSexoChart.destroy();
    }
    graficoSexoChart = new Chart(graficoSexoCanvas, {
        type: 'pie',
        data: {
            labels: labelsSexo,
            datasets: [{
                data: dataSexo,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Cores para Fem, Masc, Outro
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição por Sexo'
                }
            }
        }
    });

    // Gráfico de Idade (Manter como histograma)
    const faixaEtaria = {};
    respostas.forEach(resposta => {
        const idade = parseInt(resposta.idade);
        if (!isNaN(idade)) {
            const faixa = Math.floor(idade / 10) * 10;
            faixaEtaria[`${faixa}-${faixa + 9}`] = (faixaEtaria[`${faixa}-${faixa + 9}`] || 0) + 1;
        }
    });
    const labelsIdade = Object.keys(faixaEtaria).sort();
    const dataIdade = Object.values(faixaEtaria);

    if (graficoIdadeChart) {
        graficoIdadeChart.destroy();
    }
    graficoIdadeChart = new Chart(graficoIdadeCanvas, {
        type: 'bar',
        data: {
            labels: labelsIdade,
            datasets: [{
                label: 'Contagem por Faixa Etária',
                data: dataIdade,
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Pessoas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Faixa Etária'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição por Idade'
                }
            }
        }
    });

    // Calcular os novos resultados
    const totalRespostas = respostas.length;
    const idades = respostas.map(r => parseInt(r.idade)).filter(Number);
    const mediaIdade = idades.length > 0 ? idades.reduce((sum, idade) => sum + idade, 0) / idades.length : 0;
    const maisVelha = idades.length > 0 ? Math.max(...idades) : 0;
    const maisNova = idades.length > 0 ? Math.min(...idades) : 0;
    const pessimoCount = respostas.filter(r => r.opiniao === '1').length;
    const otimoBomCount = respostas.filter(r => r.opiniao === '4' || r.opiniao === '3').length;
    const porcentagemOtimoBom = totalRespostas > 0 ? (otimoBomCount / totalRespostas) * 100 : 0;

    let textoResultados = `
        <h4 class="text-lg font-semibold mt-4 text-gray-800">Resultados da Pesquisa</h4>
        <p>Média de Idade: ${mediaIdade.toFixed(2)} anos</p>
        <p>Idade da Pessoa Mais Velha: ${maisVelha} anos</p>
        <p>Idade da Pessoa Mais Nova: ${maisNova} anos</p>
        <p>Quantidade de Respostas "Péssimo": ${pessimoCount}</p>
        <p>Porcentagem de Respostas "Ótimo" e "Bom": ${porcentagemOtimoBom.toFixed(2)}%</p>
        <p>Número de Mulheres: ${contagemSexo['feminino'] || 0}</p>
        <p>Número de Homens: ${contagemSexo['masculino'] || 0}</p>
        <p>Número de Outros: ${contagemSexo['outro'] || 0}</p>
    `;

    if (resultadosDiv) {
        resultadosDiv.innerHTML = textoResultados;
    }

    // Gráfico de Opinião (Agora um gráfico de barras simples com as contagens)
    const contagemOpiniao = {};
    respostas.forEach(resposta => {
        contagemOpiniao[resposta.opiniao] = (contagemOpiniao[resposta.opiniao] || 0) + 1;
    });
    const labelsOpiniao = Object.keys(contagemOpiniao).map(val => {
        switch (val) {
            case '4': return 'Ótimo';
            case '3': return 'Bom';
            case '2': return 'Regular';
            case '1': return 'Péssimo';
            default: return val;
        }
    }).sort((a, b) => { // Ordenar na ordem correta
        const order = {'Péssimo': 1, 'Regular': 2, 'Bom': 3, 'Ótimo': 4};
        return order[a] - order[b];
    });
    const dataOpiniao = labelsOpiniao.map(label => contagemOpiniao[Object.keys(contagemOpiniao).find(key => {
        switch (key) {
            case '4': return label === 'Ótimo';
            case '3': return label === 'Bom';
            case '2': return label === 'Regular';
            case '1': return label === 'Péssimo';
            default: return false;
        }
    })] || 0);

    if (graficoOpiniaoChart) {
        graficoOpiniaoChart.destroy();
    }
    graficoOpiniaoChart = new Chart(graficoOpiniaoCanvas, {
        type: 'bar',
        data: {
            labels: labelsOpiniao,
            datasets: [{
                label: 'Contagem por Opinião',
                data: dataOpiniao,
                backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#F44336'], // Cores para Ótimo, Bom, Regular, Péssimo
                borderColor: ['#4CAF50', '#8BC34A', '#FFC107', '#F44336'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Pessoas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Opinião'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribuição de Opiniões'
                }
            }
        }
    });
}

// Inicializa os gráficos vazios e a área de resultados
atualizarGraficos();

// Adiciona o listener de submit ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const idadeInput = document.getElementById('idade');
    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked')?.value;
    const opiniaoSelecionada = document.getElementById('opiniao').value;

    const idade = parseInt(idadeInput.value);

    if (!isNaN(idade) && sexoSelecionado && opiniaoSelecionada) {
        respostas.push({ idade: idade, sexo: sexoSelecionado, opiniao: opiniaoSelecionada });
        atualizarGraficos();
        form.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
