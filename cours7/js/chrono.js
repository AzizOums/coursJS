var compteurElt = document.getElementById("compteur");

function augmenterCompteur() {
    var compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur + 1;
}


const buttonElt = document.getElementById("button");

var intervalId;

function demarrer() {
    intervalId = setInterval(augmenterCompteur, 1000);
    buttonElt.textContent = "Arrêter";
    buttonElt.removeEventListener("click", demarrer);
    buttonElt.addEventListener("click", arreter);
}

function arreter() {
    clearInterval(intervalId);
    buttonElt.textContent = "Démarrer";
    buttonElt.removeEventListener("click", arreter);
    buttonElt.addEventListener("click", demarrer);
}


buttonElt.addEventListener("click", demarrer);