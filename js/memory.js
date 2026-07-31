// ===== ESTADO =====

let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;

// ===== EMBARALHAR =====

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];

    }

}

// ===== INICIAR =====

function startMemory(folder) {

    matchedPairs = 0;
    flippedCards = [];

    memoryCards = [];

    for (let i = 1; i <= 5; i++) {

        memoryCards.push({
            image: `assets/memory/${folder}/${i}.jpg`,
            matched: false
        });

        memoryCards.push({
            image: `assets/memory/${folder}/${i}.jpg`,
            matched: false
        });

    }

    shuffle(memoryCards);

    showBoard();

}

// ===== TABULEIRO =====

function showBoard() {

    presentTitle.textContent = "Jogo da Memória";

    let html = `<div class="memory-board">`;

    memoryCards.forEach((card, index) => {

        if (card.matched || flippedCards.includes(index)) {

            html += `
                <img
                    class="memory-card"
                    src="${card.image}"
                    onclick="flipCard(${index})"
                >
            `;

        }

        else {

            html += `
                <div
                    class="memory-card memory-back"
                    onclick="flipCard(${index})"
                >
                    ?
                </div>
            `;

        }

    });

    html += `</div>`;

    presentContent.innerHTML = html;

}

// ===== VIRAR CARTA =====

function flipCard(index) {

    if (memoryCards[index].matched) return;

    if (flippedCards.includes(index)) return;

    if (flippedCards.length >= 2) return;

    flippedCards.push(index);

    showBoard();

    if (flippedCards.length === 2) {

        setTimeout(checkPair, 700);

    }

}

// ===== VERIFICAR PAR =====

function checkPair() {

    const first = flippedCards[0];
    const second = flippedCards[1];

    if (memoryCards[first].image === memoryCards[second].image) {

        memoryCards[first].matched = true;
        memoryCards[second].matched = true;

        matchedPairs++;

    }

    flippedCards = [];

    showBoard();

    if (matchedPairs === 5) {

        finishMemory();

    }

}

// ===== FINAL =====

function finishMemory() {

    presentTitle.textContent = "Jogo da Memória";

    presentContent.innerHTML = `

        <h2>🎉 Parabéns!</h2>

        <p>

            Você encontrou todos os pares.

        </p>

    `;

}