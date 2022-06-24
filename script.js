
// variáveis e vetores

let getSchwifty = new Audio('./songs/get-schwifty.mp3');
let evilMorty = new Audio('./songs/evil-morty.mp3');
let tries = 6;
let dynamicList = [];
let secretWordClue;
let secretWordSorted;
const words = [

    word001 = {
        name: "RICK",
        clue: "CIENTISTA"
    },

    word002 = {
        name: "MORTY",
        clue: "O NETO QUERIDO"
    },

    word003 = {
        name: "SUMMER",
        clue: "A INÚTIL"
    },

    word004 = {
        name: "JERRY",
        clue: "O INÚTIL"
    },

    word005 = {
        name: "BETH",
        clue: "A FILHA QUERIDA"
    },

    word006 = {
        name: "JESSICA",
        clue: "A CRUSH"
    },

    word007 = {
        name: "BIRDPERSON",
        clue: "O MELHOR AMIGO"
    },

]

function createSecretWord() {
    const indexWord = parseInt(Math.random() * words.length);

    secretWordSorted = words[indexWord].name;
    secretWordClue = words[indexWord].clue;

}; createSecretWord();

function appearWordInScreen() {
    const clue = document.getElementById("clue");
    clue.innerHTML = secretWordClue;

    const wordScreen = document.getElementById("secret-word");
    wordScreen.innerHTML = "";

    for (i = 0; i < secretWordSorted.length; i++) {
        if (dynamicList[i] == undefined) {
            dynamicList[i] = "&nbsp;" //gera espaço
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        } else {
            wordScreen.innerHTML = wordScreen.innerHTML + "<div class='letters'>" + dynamicList[i] + "</div>"
        }
    }
}; appearWordInScreen();

function verifyChoosedLetter(letter) {
    document.getElementById("key-" + letter).disabled = true;
    if (tries > 0) {
        changeLetterStyle("key-" + letter);
        comparelists(letter);
        appearWordInScreen();
    }
};

function changeLetterStyle(key) {
    document.getElementById(key).style.background = "lightgreen";
    document.getElementById(key).style.color = "darkblue";
}

function comparelists(letter) {
    const pos = secretWordSorted.indexOf(letter);
    if (pos < 0) { //se o jogador cometer um erro
        tries--
        loadImageHangman();

        if (tries == 0) {
            openModal("Wubba Lubba Dub Dub! Você perdeu!", "A palavra secreta era: " + secretWordSorted);
            evilMorty.play();

        }


    } else { //se o jogador acertar
        for (i = 0; i < secretWordSorted.length; i++) {
            if (secretWordSorted[i] == letter) {
                dynamicList[i] = letter;
            }
        }
    }

    let victory = true;
    for (i = 0; i < secretWordSorted.length; i++) {
        if (secretWordSorted[i] != dynamicList[i]) {
            victory = false;
        }
    }

    if (victory == true) {
        getSchwifty.play();
        openModal("Parabéns...", "você não é tão idiota...");
        tries = 0;
    }
};


// o enforcamento de Rick


function loadImageHangman() {
    switch (tries) {
        case 5:
            document.getElementById("images").style.background = "url('./images/imgRick1.png')";
            break;

        case 4:
            document.getElementById("images").style.background = "url('./images/imgRick2.png')";
            break;

        case 3:
            document.getElementById("images").style.background = "url('./images/imgRick3.png')";
            break;

        case 2:
            document.getElementById("images").style.background = "url('./images/imgRick4.png')";
            break;

        case 1:
            document.getElementById("images").style.background = "url('./images/imgRick5.png')";
            break;

        case 0:
            document.getElementById("images").style.background = "url('./images/imgRick6.png')";
            break;

        default:
            document.getElementById("images").style.background = "url('./images/img1.png')";
            break;
    }
};

//abre box 

function openModal(title, message) {
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;

    $("#myModal").modal({
        show: true
    });
}
//novo jogo

let btnNewGame = document.querySelector("#btnNewGame");
btnNewGame.addEventListener("click", function () {
    location.reload();
});

function refreshPage() {
    window.location.reload();
}