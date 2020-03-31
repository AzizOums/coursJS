// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

const maisonElt = document.getElementById('maison');

for (var i = 0; i < maisons.length; i++)
    maisonElt.insertAdjacentHTML("beforeEnd", `<option value="${maisons[i].code}">${maisons[i].nom}</option>`);


maisonElt.addEventListener("change", function (e) {
    const persos = getPersonnages(e.target.value);
    document.getElementById('persos').textContent = "";
    for (var i = 0; i < persos.length; i++) {
        document.getElementById('persos').insertAdjacentHTML("beforeEnd", `<li>${persos[i]}</li>`);
    }
});;