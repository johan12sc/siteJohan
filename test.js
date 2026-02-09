// Animation du texte (effet machine à écrire)

const textElement = document.getElementById('anime-text');

const phrases = [
    "Etudiant en informatique . . . ",
    "Bienvenue sur mon site !!",
    "Transformer des idées en réalité"
];

let phraseIndex = 0;
let lettreIndex = 0;

function ecrire() {
    const currentText = phrases[phraseIndex];

    if (lettreIndex < currentText.length) {
        textElement.textContent += currentText.charAt(lettreIndex);
        lettreIndex++;
        setTimeout(ecrire, 100);
    } else {
        setTimeout(effacer, 1500); 
    }
}

function effacer() {
    if (lettreIndex > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        lettreIndex--;
        setTimeout(effacer, 60);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(ecrire, 300);
    }
}

ecrire();
