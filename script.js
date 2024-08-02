const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você decide ir pra casa bater um lolzinho dos cria. Você, como sempre, pega Yasuo mid e está contra uma Lux.",
        alternativas: [
            {
                texto: "Vai toma um courtesy pra fica esperta",
                afirmacao: "Você está confiante que vai ganhar "
            },
            {
                texto: "Vai toma no cu luxanna",
                afirmacao: "Se estressou só um pouco pq sabe que o boneco dela é chato."
            }
        ]
    },
    {
        enunciado: "aos 4 min de game vc toma um gank do sup e do jg inimigo, como reage?",
        alternativas: [
            {
                texto: "/all chama a mãe também",
                afirmacao: "e você tá puto pq ela não consegue te matar sozinha, mas ainda quer dar o troco."
            },
            {
                texto: "Não escrever nada no chat, apenas foco.",
                afirmacao: "e você está focado em matá-la."
            }
        ]
    },
    {
        enunciado: "Você atingiu seu spike de 100 de crit e 1.33 de cd no Q, vai ir pra cima?",
        alternativas: [
            {
                texto: "Óbvio.",
                afirmacao: "No meio da partida, com um combo vocẽ avançou e..."
            },
            {
                texto: "Óbvio.",
                afirmacao: "No meio da partida, com um combo você avançou e..."
            }
        ]
    },
    {
        enunciado: "Você stackou o Q, e agora?",
        alternativas: [
            {
                texto: "Dou um courtesy nela né pai, EQF EQR F Ctrl6",
                afirmacao: "SOLADAA!! Teu courtesy combo impressionou todo mundo que viu."
            },
            {
                texto: "Acerto o tornado de longe e dou um airblade convencional",
                afirmacao: "SOLADA! Foi um combo fácil mas eficiente."
            }
        ]
    },
    {
        enunciado: "Você ganhou!!! Vai dizer oq no chat?",
        alternativas: [
            {
                texto: "/all gg mid diff melhorem",
                afirmacao: "Quando acabou a partida eles tiltaram"
            },
            {
                texto: "/all ggwp",
                afirmacao: "Quando acabou a partida te chamaram pra duo pq você foi humilde nos ultimos momentos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E então...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
