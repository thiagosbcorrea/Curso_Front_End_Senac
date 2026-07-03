const dadosTreino = [
    { frase: "oi", intencao: "saudacao" },
    { frase: "olá", intencao: "saudacao" },
    { frase: "bom dia", intencao: "saudacao" },
    { frase: "boa noite", intencao: "saudacao" },

    { frase: "qual horário da aula", intencao: "horario" },
    { frase: "que horas começa a aula", intencao: "horario" },
    { frase: "a aula começa que horas", intencao: "horario" },
    { frase: "qual é o horário do curso", intencao: "horario" },

    { frase: "como faço matrícula", intencao: "matricula" },
    { frase: "quero me matricular", intencao: "matricula" },
    { frase: "como entrar no curso", intencao: "matricula" },
    { frase: "como faço inscrição", intencao: "matricula" },

    { frase: "quais cursos tem", intencao: "cursos" },
    { frase: "tem curso de programação", intencao: "cursos" },
    { frase: "quais cursos estão disponíveis", intencao: "cursos" },
    { frase: "tem curso de frontend", intencao: "cursos" },

    { frase: "tchau", intencao: "despedida" },
    { frase: "até mais", intencao: "despedida" },
    { frase: "obrigado", intencao: "despedida" },
    { frase: "valeu", intencao: "despedida" },
    
    {frase: "pagamento", intencao: "financeiro"},
    {frase: "como faço para pagar", intencao: "financeiro"},
    {frase: "quais são as formas de pagamento", intencao: "financeiro"},
    {frase: "como posso pagar", intencao: "financeiro"},
    {frase: "quais são os métodos de pagamento", intencao: "financeiro"},
    {frase: "quais são as opções de pagamento", intencao: "financeiro"},

    {frase: "certificação", intencao: "certificado"},
    {frase: "como obtenho o certificado", intencao: "certificado"},
    {frase: "como posso conseguir o certificado", intencao: "certificado"},
    {frase: "quais são os requisitos para obter o certificado", intencao: "certificado"},
    {frase: "como posso receber o certificado", intencao: "certificado"},
    {frase: "quais são os critérios para obter o certificado", intencao: "certificado"},

    {frase: "estágio", intencao: "estágio"},
    {frase: "como consigo um estágio", intencao: "estágio"},
    {frase: "quais são as oportunidades de estágio", intencao: "estágio"},
    {frase: "como posso me candidatar a um estágio", intencao: "estágio"},
    {frase: "quais são os requisitos para conseguir um estágio", intencao: "estágio"},
    {frase: "como posso encontrar um estágio", intencao: "estágio"},

    {frase: "onde é a aula", intencao: "localizacao"},
    {frase: "qual é o endereço da aula", intencao: "localizacao"},
    {frase: "como chego na aula", intencao: "localizacao"},
    {frase: "qual é o local da aula", intencao: "localizacao"},
    {frase: "onde fica a sala de aula", intencao: "localizacao"},
    {frase: "qual é a localização da aula", intencao: "localizacao"},

    {frase: "como entro em contato", intencao: "contato"},
    {frase: "qual é o telefone para contato", intencao: "contato"},
    {frase: "como posso falar com alguém", intencao: "contato"},
    {frase: "qual é o e-mail para contato", intencao: "contato"},
    {frase: "como posso enviar uma mensagem", intencao: "contato"},
    {frase: "qual é a forma de contato", intencao: "contato"}
];

const respostas = {
    saudacao: "Olá! Como posso ajudar?",
    horario: "As aulas começam às 19h.",
    matricula: "Para fazer matrícula, procure a secretaria ou acesse o sistema do curso.",
    cursos: "Temos cursos de Front-end, Backend, Python, Django, Angular e IA.",
    despedida: "Até mais! Bons estudos!",
    financeiro: "Temos várias formas de pagamento disponíveis, como cartão de crédito, débito e transferência bancária.",
    certificado: "Para obter o certificado, você precisa completar todas as aulas e aprovar em todos os exercícios.",
    estágio: "Existem várias oportunidades de estágio disponíveis. Você pode se candidatar através do nosso site ou em contato com a equipe de carreira.",
    localizacao: "A aula é realizada na sala 110 do prédio principal.",
    contato: "Você pode entrar em contato conosco através do telefone (11) 1234-5678 ou pelo e-mail contato@curso.com."
};

let vocabulario = [];
let intencoes = [];
let modelo;

function limparTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/gi, "");
}

function tokenizar(texto) {
    return limparTexto(texto).split(" ").filter(palavra => palavra.trim() !== "");
}

function criarVocabulario() {
    const palavras = [];

    dadosTreino.forEach(item => {
        const tokens = tokenizar(item.frase);
        palavras.push(...tokens);
    });

    vocabulario = [...new Set(palavras)];
    intencoes = [...new Set(dadosTreino.map(item => item.intencao))];
}

function textoParaVetor(texto) {
    const tokens = tokenizar(texto);

    return vocabulario.map(palavra => {
        return tokens.includes(palavra) ? 1 : 0;
    });
}

function intencaoParaVetor(intencao) {
    return intencoes.map(item => {
        return item === intencao ? 1 : 0;
    });
}

async function treinarModelo() {
    criarVocabulario();

    const entradas = dadosTreino.map(item => textoParaVetor(item.frase));
    const saidas = dadosTreino.map(item => intencaoParaVetor(item.intencao));

    const xs = tf.tensor2d(entradas);
    const ys = tf.tensor2d(saidas);

    modelo = tf.sequential();

    modelo.add(tf.layers.dense({
        inputShape: [vocabulario.length],
        units: 16,
        activation: "relu"
    }));

    modelo.add(tf.layers.dense({
        units: 12,
        activation: "relu"
    }));

    modelo.add(tf.layers.dense({
        units: intencoes.length,
        activation: "softmax"
    }));

    modelo.compile({
        optimizer: "adam",
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"]
    });

    await modelo.fit(xs, ys, {
        epochs: 200,
        shuffle: true,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                document.getElementById("status").innerText =
                    `Treinando... Época ${epoch + 1} - Erro: ${logs.loss.toFixed(4)}`;
            }
        }
    });

    document.getElementById("status").innerText = "Modelo treinado! Pode conversar.";
    document.getElementById("mensagem").disabled = false;
    document.getElementById("btnEnviar").disabled = false;
}

async function preverIntencao(texto) {
    const vetor = textoParaVetor(texto);
    const entrada = tf.tensor2d([vetor]);

    const predicao = modelo.predict(entrada);
    const resultado = await predicao.data();

    let maiorValor = 0;
    let indiceMaior = 0;

    resultado.forEach((valor, indice) => {
        if (valor > maiorValor) {
            maiorValor = valor;
            indiceMaior = indice;
        }
    });

    if (maiorValor < 0.55) {
        return "desconhecido";
    }

    return intencoes[indiceMaior];
}

function adicionarMensagem(texto, tipo) {
    const chat = document.getElementById("chat");

    const div = document.createElement("div");
    div.classList.add("msg", tipo);
    div.innerText = texto;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

async function enviarMensagem() {
    const input = document.getElementById("mensagem");
    const texto = input.value.trim();

    if (texto === "") return;

    adicionarMensagem("Você: " + texto, "user");
    input.value = "";

    const intencao = await preverIntencao(texto);

    let resposta;

    if (intencao === "desconhecido") {
        resposta = "Desculpe, ainda não sei responder isso.";
    } else {
        resposta = respostas[intencao];
    }

    adicionarMensagem("Bot: " + resposta, "bot");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mensagem").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });

    treinarModelo();
});
