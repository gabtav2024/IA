const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Contemple o MAGOOOOO, Com seus poderesss,incriveis poderes incriveis podereeeeess.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "belooooo.",
        alternativas: [
            {
                texto: " da horaaaa",
                afirmacao:"afirmacao"
            },
            {
                texto: "oriveeeeeeuuuu.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();