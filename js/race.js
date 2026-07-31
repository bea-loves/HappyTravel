let raceSketch;

function startRace() {

    presentTitle.textContent = "Corrida dos Corações";

    presentContent.innerHTML = `
        <div id="raceCanvas"></div>
    `;

    if (raceSketch) {
        raceSketch.remove();
    }

    raceSketch = new p5((p) => {

        let playerX;
        let bots;
        let finished;
        let restarting;

        const playerY = 90;
        const botsY = [170, 250, 330, 410];

        function resetRace() {

            playerX = 20;
            bots = [20, 20, 20, 20];

            finished = false;
            restarting = false;

        }

        p.setup = function () {

            const canvas = p.createCanvas(800, 500);

            canvas.parent("raceCanvas");

            p.textAlign(p.CENTER, p.CENTER);

            resetRace();

        };

        p.draw = function () {

            p.background("#FD858E");

            p.fill(255);
            p.textSize(18);
            p.text("Aperte ESPAÇO para correr ❤️", 400, 30);

            // Linha de chegada
            p.fill(255);
            p.rect(740, 0, 10, 500);

            p.fill(0);

            for (let y = 0; y < 500; y += 20) {
                p.rect(740, y, 10, 10);
            }

            // Bots
            if (!finished) {

                for (let i = 0; i < bots.length; i++) {
                    bots[i] += p.random(1.5, 3.5);
                }

            }

            // Jogadores
            p.textSize(36);

            p.text("❤️", playerX, playerY);

            p.text("💙", bots[0], botsY[0]);
            p.text("💜", bots[1], botsY[1]);
            p.text("💛", bots[2], botsY[2]);
            p.text("🤍", bots[3], botsY[3]);

           // Verifica vitória
           if (!finished && playerX >= 720) {

                 finished = true;

}

           // Desenha tela de vitória
           if (finished && playerX >= 720) {

            p.fill("#1b5e20");
            p.textSize(34);
            p.text("🎉 Você venceu!", 400, 470);

}

            // Derrota
            if (!finished) {

                for (let bot of bots) {

                    if (bot >= 720) {

                        finished = true;

                    }

                }

            }

            if (finished && playerX < 720) {

                p.fill("#b71c1c");
                p.textSize(30);
                p.text("Tente novamente ❤️", 400, 470);

                if (!restarting) {

                    restarting = true;

                    setTimeout(() => {

                        resetRace();

                    }, 2000);

                }

            }

        };

        p.keyPressed = function () {

            if (finished) return;

            if (p.keyCode === 32) {

                playerX += p.random(10, 18);

            }

        };

    }, "raceCanvas");

}