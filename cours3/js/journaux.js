// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for (var i = 0; i < journaux.length; i++) {
	const aElt = document.createElement("a");
	aElt.href = journaux[i];
	aElt.textContent = journaux[i];
	document.getElementById("contenu").appendChild(aElt);
	document.getElementById("contenu").appendChild(document.createElement("br"));
}