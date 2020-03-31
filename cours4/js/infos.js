var style = getComputedStyle(document.getElementById("contenu"));

const ulElt = document.createElement("ul");
const hauteurElt = document.createElement("li");
const longueurElt = document.createElement("li");

hauteurElt.textContent = "Hauteur: " + style.height;
longueurElt.textContent = "Longueur: " + style.width;

ulElt.appendChild(hauteurElt);
ulElt.appendChild(longueurElt);

document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(ulElt);