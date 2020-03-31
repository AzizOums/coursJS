// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var dlElt = document.createElement("dl");
for (var i = 0; i < mots.length; i++) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mots[i].terme;
    dtElt.appendChild(strongElt);

    var ddElt = document.createElement("dd");
    ddElt.textContent = mots[i].definition;

    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
}

document.getElementById("contenu").appendChild(dlElt);