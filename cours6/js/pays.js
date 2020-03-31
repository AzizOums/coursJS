// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

const inputElt = document.getElementById('pays');
const suggestionsElt = document.getElementById('suggestions');

inputElt.addEventListener("input", function (e) {
    suggestionsElt.textContent = "";
    listePays.forEach((pays) => {
        if (pays.includes(e.target.value)){
            suggestionsElt.insertAdjacentHTML("beforeEnd", `<div class="suggestion">${pays}</div>`);
        }
    });
    
    for (var i = 0; i < document.querySelectorAll(".suggestion").length; i++) {
        document.querySelectorAll(".suggestion")[i].addEventListener("click", function (e) {
            inputElt.value = e.target.textContent;
            suggestionsElt.textContent = "";
        });
    }

});;


/*
inputElt.addEventListener("input", function (e) {
    const listSuggestions = search(e.target.value);
    
    suggestionsElt.textContent = "";
    for (var i = 0; i < listSuggestions.length; i++) {
        const suggestionElt = document.createElement("div");
        suggestionElt.textContent = listSuggestions[i];
        suggestionElt.addEventListener("click", function (e) {
            inputElt.value = e.target.textContent;
            suggestionsElt.textContent = "";
        });
        suggestionElt.classList.add("suggestion");
        suggestionsElt.appendChild(suggestionElt);
    }
});
*/
