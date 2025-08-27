// Banco de dados dos cursos
const cursos = {
  ads: {
    nome: "Análise e Desenvolvimento de Sistemas",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Informação e Comunicação",
    duracao: "6 ou 8 semestres",
    info: "Forma profissionais para desenvolvimento de software, bancos de dados e segurança da informação.",
  },
  "ds-ams": {
    nome: "Desenvolvimento de Sistemas – AMS",
    tipo: "Articulação da Formação Profissional Média e Superior (AMS)",
    eixo: "Informação e Comunicação",
    duracao: "3 semestres",
    info: "Integra o ensino médio com o superior, permitindo formação acelerada.",
  },
  eletronica: {
    nome: "Eletrônica Automotiva",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Controle e Processos Industriais",
    duracao: "6 semestres",
    info: "Envolve eletrônica embarcada, sensores e diagnóstico automotivo.",
  },
  fabricacao: {
    nome: "Fabricação Mecânica",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Produção Industrial",
    duracao: "6 semestres",
    info: "Focado em usinagem, CAD/CAM e manufatura assistida por computador.",
  },
  qualidade: {
    nome: "Gestão da Qualidade",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Gestão e Negócios",
    duracao: "6 semestres",
    info: "Estuda processos de melhoria contínua, normas ISO e auditoria de qualidade.",
  },
  "gestao-ead": {
    nome: "Gestão Empresarial – EAD",
    tipo: "Curso Superior de Tecnologia na modalidade a distância",
    eixo: "Gestão e Negócios",
    duracao: "6 semestres",
    info: "Capacita gestores para administração estratégica com flexibilidade de estudo online.",
  },
  logistica: {
    nome: "Logística",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Gestão e Negócios",
    duracao: "6 semestres",
    info: "Abrange transporte, armazenagem e cadeia de suprimentos.",
  },
  "logistica-ams": {
    nome: "Logística – AMS",
    tipo: "Articulação da Formação Profissional Média e Superior (AMS)",
    eixo: "Gestão e Negócios",
    duracao: "3 semestres",
    info: "Permite aos alunos do ensino médio iniciarem o superior junto com a formação técnica.",
  },
  manufatura: {
    nome: "Manufatura Avançada",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Controle e Processos Industriais",
    duracao: "6 semestres",
    info: "Relacionada à Indústria 4.0, com foco em automação e inovação.",
  },
  aeronaves: {
    nome: "Manutenção de Aeronaves",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Controle e Processos Industriais",
    duracao: "6 semestres",
    info: "Capacita profissionais para inspeção, reparo e manutenção de aeronaves.",
  },
  polimeros: {
    nome: "Polímeros",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Produção Industrial",
    duracao: "6 semestres",
    info: "Forma profissionais especializados em plásticos, borrachas e materiais compostos.",
  },
  metalurgicos: {
    nome: "Processos Metalúrgicos",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Controle e Processos Industriais",
    duracao: "6 semestres",
    info: "Trata de fundição, soldagem e tratamentos térmicos em metais.",
  },
  projetos: {
    nome: "Projetos Mecânicos",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Produção Industrial",
    duracao: "6 semestres",
    info: "Voltado para engenharia de produtos, prototipagem e projetos CAD.",
  },
  biomedicos: {
    nome: "Sistemas Biomédicos",
    tipo: "Curso Superior de Tecnologia - Presencial",
    eixo: "Ambiente e Saúde",
    duracao: "6 semestres",
    info: "Integra saúde e tecnologia com equipamentos médicos e hospitalares.",
  },
};

function abrirCurso() {
  const select = document.getElementById("cursoSelect");
  const cursoId = select.value;

  if (cursoId === "") return;

  const confirmacao = confirm(
    "Deseja abrir informações sobre o curso " + cursos[cursoId].nome + "?"
  );
  if (confirmacao) {
    const curso = cursos[cursoId];

    const conteudo = `
      <h2>${curso.nome}</h2>
      <p><b>Tipo:</b> ${curso.tipo}</p>
      <p><b>Eixo Tecnológico:</b> ${curso.eixo}</p>
      <p><b>Duração:</b> ${curso.duracao}</p>
      <p><b>Info:</b> ${curso.info}</p>
    `;

    const novaJanela = window.open("", "cursoWindow", "width=600,height=300");
    novaJanela.document.write(`
      <html>
        <head>
          <title>${curso.nome}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #D3DAD9;
              padding: 20px;
              color: #37353E;
            }
            h2 { color: #715A5A; }
            p { margin: 6px 0; }
          </style>
        </head>
        <body>${conteudo}</body>
      </html>
    `);
  }
}
