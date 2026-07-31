// ===== PERGUNTAS =====

const quizzes = {

    sasunaru: [

        {
            question: "Onde Naruto e Sasuke deram o primeiro beijo (acidental)?",
            options: [
                "Vale do Fim",
                "Academia Ninja",
                "Hospital de Konoha",
                "Campo de Treinamento 7"
            ],
            answer: 1
        },

        {
            question: "Qual foi o motivo de Sasuke deixar Konoha?",
            options: [
                "Queria proteger Naruto.",
                "Queria encontrar seu irmão.",
                "Buscava mais poder para derrotar Itachi.",
                "Foi expulso da vila."
            ],
            answer: 2
        },

        {
            question: "Quem sempre prometeu trazer Sasuke de volta para Konoha?",
            options: [
                "Sakura",
                "Kakashi",
                "Iruka",
                "Naruto"
            ],
            answer: 3
        },

        {
            question: "No Vale do Fim, o que Sasuke diz antes de ir embora na primeira luta contra Naruto?",
            options: [
                "Você é meu melhor amigo.",
                "Obrigado.",
                "Até nunca mais.",
                "Você é irritante."
            ],
            answer: 1
        },

        {
            question: "Qual símbolo aparece nas estátuas do Vale do Fim onde Naruto e Sasuke lutam?",
            options: [
                "Hokages",
                "Hashirama e Madara",
                "Minato e Kushina",
                "Hagoromo e Hamura"
            ],
            answer: 1
        },

        {
            question: "Quem perde um braço na batalha final?",
            options: [
                "Apenas Naruto",
                "Apenas Sasuke",
                "Os dois",
                "Nenhum dos dois"
            ],
            answer: 2
        },

        {
            question: "O que Naruto mais queria provar para Sasuke durante toda a história?",
            options: [
                "Que era mais forte.",
                "Que nunca desistiria dele.",
                "Que seria o melhor professor.",
                "Que queria ser da ANBU."
            ],
            answer: 1
        },

        {
            question: "Qual destes momentos é considerado um dos mais emocionantes entre os dois?",
            options: [
                "A batalha final no Vale do Fim.",
                "A luta contra Zabuza.",
                "O Exame Chunin.",
                "A invasão de Pain."
            ],
            answer: 0
        },

        {
            question: "Depois da batalha final, qual é a decisão de Sasuke?",
            options: [
                "Tornar-se Hokage imediatamente.",
                "Sair em uma jornada de redenção.",
                "Entrar para a ANBU.",
                "Deixar o País do Fogo para sempre."
            ],
            answer: 1
        },

        {
            question: "Como Naruto e Sasuke encerram a batalha final?",
            options: [
                "Com um último Rasengan.",
                "Com um aperto de mãos.",
                "Caídos lado a lado, após perderem um braço cada.",
                "Com Kakashi interrompendo a luta."
            ],
            answer: 2
        }
    ],

    forus: [

        {
            question: "Qual dessas características foi a primeira da lista 'tudo o que eu amo sobre você'?",
            options: [
                "Sua voz",
                "Seus olhos",
                "Seu cabelo",
                "Seu sorriso"
            ],
            answer: 1
        },

        {
            question: "Qual palavra simples virou algo especial entre nós?",
            options: [
                "prç",
                "aham",
                "slk",
                "hmm"
            ],
            answer: 2
        },

        {
            question: "Sobre qual personagem eu brinco que tenho ciúmes?",
            options: [
                "Naruto",
                "Itachi",
                "Kakashi",
                "Sasuke"
            ],
            answer: 3
        },

        {
            question: "O que eu acho fofo quando você faz ao receber minhas declarações enormes?",
            options: [
                "Muda de assunto.",
                "Fica toda sem graça.",
                "Ignora.",
                "Responde só com um emoji."
            ],
            answer: 1
        },

        {
            question: "Qual cheiro sempre me faz pensar em você?",
            options: [
                "Lavanda",
                "Café",
                "Baunilha",
                "Rosas"
            ],
            answer: 2
        },

        {
            question: "O que você faz por mim mesmo reclamando?",
            options: [
                "Assistir filmes de terror.",
                "Dormir cedo e comer cedo.",
                "Jogar videogame.",
                "Acordar às 5 da manhã."
            ],
            answer: 1
        },

        {
            question: "O que eu adoro quando você faz ao falar de algo que ama?",
            options: [
                "Fica em silêncio.",
                "Muda de assunto.",
                "Fica empolgada.",
                "Dá risada de tudo."
            ],
            answer: 2
        },

        {
            question: "Quais emojis seus eu amo receber?",
            options: [
                "❤️",
                "😝😝😝",
                "👍👍👍 ou 👎👎👎",
                "💪"
            ],
            answer: 2
        },

        {
            question: "O que me dá a oportunidade perfeita para me declarar de novo?",
            options: [
                "Quando você faz birra porque vou trabalhar.",
                "Quando você diz que sente que eu não te amo às vezes.",
                "Quando você reclama de matemática.",
                "Quando você fala de gatinhos."
            ],
            answer: 1
        },

        {
            question: "Qual é a resposta mais correta para a pergunta 'o que eu mais amo em você'?",
            options: [
                "Seus olhos.",
                "Seu jeito.",
                "Seu coração.",
                "Você."
            ],
            answer: 3
        }

    ]

};

// ===== ESTADO =====

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

// ===== INICIAR =====

function startQuiz(questions) {

    currentQuiz = questions;
    currentQuestion = 0;
    score = 0;

    showQuestion();

}

// ===== MOSTRAR PERGUNTA =====

function showQuestion() {

    if (currentQuestion >= currentQuiz.length) {

        finishQuiz();
        return;

    }

    const question = currentQuiz[currentQuestion];

    presentTitle.textContent = `Pergunta ${currentQuestion + 1}`;

    let html = `
        <h2>${question.question}</h2>
        <div class="quiz-options">
    `;

    question.options.forEach((option, index) => {

        html += `
            <button class="quiz-button" onclick="checkAnswer(${index})">
                ${option}
            </button>
        `;

    });

    html += `</div>`;

    presentContent.innerHTML = html;

}

// ===== RESPONDER =====

function checkAnswer(answer) {

    const question = currentQuiz[currentQuestion];

    if (answer === question.answer) {

        score++;

    }

    currentQuestion++;

    showQuestion();

}

// ===== FINAL =====

function finishQuiz() {

    presentTitle.textContent = "Quiz";

    presentContent.innerHTML = `
        <h2>Fim do Quiz!</h2>

        <p>
            Você acertou <strong>${score}</strong> de <strong>${currentQuiz.length}</strong> perguntas.
        </p>

        <button class="quiz-button" onclick="showSection('home')">
            Voltar para Home
        </button>
    `;

}