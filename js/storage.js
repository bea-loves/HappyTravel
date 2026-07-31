// ===== CRIAR SAVE =====

function createSave() {

    const progress = {

        currentDay: 1,

        lastAccess: new Date().toDateString(),

        itinerary: createItinerary(),

        passport: {

            stamps: []

        },

        settings: {

            music: true,

            sounds: true

        }

    };

    localStorage.setItem("happyTravel", JSON.stringify(progress));

    return progress;

}


// ===== CARREGAR SAVE =====

function loadSave() {

    const save = localStorage.getItem("happyTravel");

    if (save) {

        const progress = JSON.parse(save);

        // Compatibilidade com versões antigas

        if (!progress.passport) {

            progress.passport = {

                stamps: []

            };

        }

        if (!progress.settings) {

            progress.settings = {

                music: true,

                sounds: true

            };

        }

        saveProgress(progress);

        return progress;

    }

    return createSave();

}


// ===== SALVAR =====

function saveProgress(progress) {

    localStorage.setItem(

        "happyTravel",

        JSON.stringify(progress)

    );

}


// ===== ATUALIZAR DIA =====

function updateCurrentDay(progress) {

    const today = new Date().toDateString();

    if (today !== progress.lastAccess) {

        if (progress.currentDay < 31) {

            progress.currentDay++;

        }

        progress.lastAccess = today;

        saveProgress(progress);

    }

}