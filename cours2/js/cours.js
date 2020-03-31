var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Le premier paragraphe
console.log(document.querySelector("p"));

// Le contenu HTML de l'élément identifié par "contenu"
//console.log(document.getElementById("contenu").innerHTML);

/*
document.getElementById("contenu").innerHTML = 
		"<p>Cette liste a été établie en 2009 à la suite d'un vote par Internet.</p>" +
		'<ul class="merveilles" id="nouvelles">'
            +'<li class="existe">La Grande Muraille de Chine</li>'
            +'<li class="existe">Pétra</li>'
            +'<li class="existe">Le Christ du Corcovado</li>'
            +'<li class="existe">Machu Picchu</li>'
            +'<li class="existe">Chichén Itzá</li>'
            +'<li class="existe">Le Colisée</li>'
            +'<li class="existe">Le Taj Mahal</li>'
        +'</ul>';
*/

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

//tester si un element contient un attribut
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}
