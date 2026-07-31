// ==============================
// NAVEGAÇÃO
// ==============================

function showSection(sectionId) {

    // Fecha a corrida caso esteja aberta
    if (typeof raceSketch !== "undefined" && raceSketch) {

        raceSketch.remove();
        raceSketch = null;

    }

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");

    });

    document.getElementById(sectionId).classList.remove("hidden");

}



// ==============================
// HOME
// ==============================

function updateHome(progress) {

    destinationTitle.textContent = `📍 Destino ${progress.currentDay}`;

}



// ==============================
// PRESENTE DO DIA
// ==============================

function getTodayPresent(progress) {

    return progress.itinerary[progress.currentDay - 1];

}



// ==============================
// ABRIR PRESENTE
// ==============================

async function openPresent(progress) {

    const present = getTodayPresent(progress);

    presentTitle.textContent = present.title;

    switch (present.type) {

        case "card":

        case "message": {

            const response = await fetch(present.content);

            const html = await response.text();

            presentContent.innerHTML = html;

            break;

        }

        case "image":

            presentContent.innerHTML = `

                <img src="${present.content}" alt="${present.title}" class="presentImage">

            `;

            break;

        case "audio":

            presentContent.innerHTML = `

                <audio controls autoplay>

                    <source src="${present.content}">

                </audio>

            `;

            break;

        case "video":

            presentContent.innerHTML = `

                <video controls class="presentVideo">

                    <source src="${present.content}">

                </video>

            `;

            break;

        case "playlist":

            presentContent.innerHTML = `

                <a href="${present.content}" target="_blank" class="playlistButton">

                    🎵 Abrir Playlist

                </a>

            `;

            break;

        case "quiz":

            startQuiz(quizzes[present.quiz]);

            showSection("present");

            return;

        case "memory":

            startMemory(present.memory);

            showSection("present");

            return;

        case "race":

            startRace();

            showSection("present");

            return;

    }

    showSection("present");

}

// ===== ABRIR PRESENTE POR DIA =====

async function openPresentByDay(progress, day) {

    const present = progress.itinerary[day - 1];

    presentTitle.textContent = present.title;

    switch (present.type) {

        case "card":
        case "message": {

            const response = await fetch(present.content);
            const html = await response.text();

            presentContent.innerHTML = html;

            break;
        }

        case "image":

            presentContent.innerHTML = `
                <img src="${present.content}" alt="${present.title}">
            `;

            break;

        case "audio":

            presentContent.innerHTML = `
                <audio controls autoplay>
                    <source src="${present.content}">
                </audio>
            `;

            break;

        case "video":

            presentContent.innerHTML = `
                <video controls>
                    <source src="${present.content}">
                </video>
            `;

            break;

        case "playlist":

            presentContent.innerHTML = `
                <a href="${present.content}" target="_blank">
                    🎵 Abrir playlist
                </a>
            `;

            break;

        case "quiz":

            startQuiz(quizzes[present.quiz]);
            showSection("present");
            return;

        case "memory":

            startMemory(present.memory);
            showSection("present");
            return;

        case "race":

            startRace();
            showSection("present");
            return;

    }

    showSection("present");

}



// ==============================
// PASSAPORTE
// ==============================

function openPassport(progress){

    const passportContent = document.getElementById("passportContent");

    let stamps = "";

    for(let i=1;i<=31;i++){

        if(i<=progress.currentDay){

            stamps += `

            <button
                class="stamp"
                onclick="openPresentByDay(window.progress,${i})">

                🧳

                <small>${i}</small>

            </button>

            `;

        }else{

            stamps += `

            <div class="stamp empty">

                🔒

                <small>${i}</small>

            </div>

            `;

        }

    }

    passportContent.innerHTML = `

        <div class="passportCard">

            <h2>✈ HAPPY TRAVEL</h2>

            <h3>PASSAPORTE</h3>

            <div class="passportInfo">

                ❤️ <strong>Viajante</strong>

                <br>

                Dia ${progress.currentDay} de 31

            </div>

            <hr>

            <div class="stamps">

                ${stamps}

            </div>

            <div class="passportPhrase">

                "A melhor viagem é ao seu lado."

            </div>

        </div>

    `;

    showSection("passport");

}


// ==============================
// CONFIGURAÇÕES
// ==============================

function openSettings(progress) {

    document.getElementById("musicToggle").checked = progress.settings.music;

    document.getElementById("soundsToggle").checked = progress.settings.sounds;

    showSection("settings");

}