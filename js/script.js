// ==============================
// ELEMENTOS
// ==============================

const startButton = document.getElementById("startButton");
const destinationTitle = document.getElementById("destinationTitle");
const openPresentButton = document.getElementById("openPresentButton");

const presentTitle = document.getElementById("presentTitle");
const presentContent = document.getElementById("presentContent");

const backButton = document.getElementById("backButton");

const settingsButton = document.getElementById("settingsButton");

const passportShortcut = document.getElementById("passportShortcut");

const passportBackButton = document.getElementById("passportBackButton");

const settingsBackButton = document.getElementById("settingsBackButton");

const musicToggle = document.getElementById("musicToggle");

const soundsToggle = document.getElementById("soundsToggle");

const bgMusic = document.getElementById("bgMusic");

const clickSound = document.getElementById("clickSound");

const planeSound = document.getElementById("planeSound");


// ==============================
// EMBARALHAR
// ==============================

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}


// ==============================
// CRIAR ROTEIRO
// ==============================

function createItinerary(){

    const itinerary = new Array(31);

    const randomPresents = [];

    for(const present of presents){

        if(present.fixedDay){

            itinerary[present.fixedDay - 1] = present;

        }else{

            randomPresents.push(present);

        }

    }

    shuffle(randomPresents);

    let index = 0;

    for(let i = 0; i < itinerary.length; i++){

        if(!itinerary[i]){

            itinerary[i] = randomPresents[index];

            index++;

        }

    }

    return itinerary;

}


// ==============================
// SAVE
// ==============================

const progress = loadSave();
window.progress = progress;

updateCurrentDay(progress);

updateHome(progress);


// ==============================
// EVENTOS
// ==============================


// INTRO

startButton.addEventListener("click",()=>{

    planeSound.currentTime = 0;

    planeSound.play();

    setTimeout(()=>{

        showSection("home");

    },1800);

});



// PRESENTE

openPresentButton.addEventListener("click",()=>{

    openPresent(progress);

});



// VOLTAR PRESENTE

backButton.addEventListener("click",()=>{

    showSection("home");

});



// CONFIGURAÇÕES

settingsButton.addEventListener("click",()=>{

    openSettings(progress);

});



// ABRIR PASSAPORTE

passportShortcut.addEventListener("click",()=>{

    openPassport(progress);

});



// VOLTAR PASSAPORTE

passportBackButton.addEventListener("click",()=>{

    showSection("settings");

});



// VOLTAR CONFIGURAÇÕES

settingsBackButton.addEventListener("click",()=>{

    showSection("home");

});



// ==============================
// MÚSICA
// ==============================

document.addEventListener("click",()=>{

    if(progress.settings.music && bgMusic.paused){

        bgMusic.volume = 0;

        bgMusic.play();

        const fade = setInterval(()=>{

            if(bgMusic.volume < 0.25){

                bgMusic.volume += 0.01;

            }else{

                bgMusic.volume = 0.25;

                clearInterval(fade);

            }

        },100);

    }

},{once:true});



// ==============================
// CONFIGURAÇÕES
// ==============================

musicToggle.checked = progress.settings.music;

soundsToggle.checked = progress.settings.sounds;



musicToggle.addEventListener("change",()=>{

    progress.settings.music = musicToggle.checked;

    saveProgress(progress);

    if(progress.settings.music){

        bgMusic.play();

    }else{

        bgMusic.pause();

    }

});



soundsToggle.addEventListener("change",()=>{

    progress.settings.sounds = soundsToggle.checked;

    saveProgress(progress);

});



// ==============================
// CLIQUES
// ==============================

document.addEventListener("click",(event)=>{

    if(event.target.tagName === "BUTTON"){

        if(progress.settings.sounds){

            clickSound.currentTime = 0;

            clickSound.play();

        }

    }

});