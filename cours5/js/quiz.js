// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];


const contenuElt = document.getElementById("contenu")
for (var i = 0; i < questions.length; i++) {
    pElt = document.createElement("p");
    pElt.insertAdjacentHTML("beforeEnd", `<div><strong> Question ${(i+1)}: </strong> ${questions[i].enonce} </div>`);
    
    const button = document.createElement("button");
    button.textContent = "Afficher la réponse";
    const reponse = questions[i].reponse;
    button.addEventListener("click", function click(event) {
        event.target.parentNode.textContent = reponse;
    });

    const zone = document.createElement("div");
    zone.appendChild(button);

    pElt.appendChild(zone);
    
    contenuElt.appendChild(pElt);
}