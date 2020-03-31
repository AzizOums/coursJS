const url = "https://oc-jswebsrv.herokuapp.com/api/temoignage";

const form = document.querySelector("form");
const reponseElt = document.getElementById('reponse');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = {
	    pseudo: form.elements.pseudo.value,
	    evaluation: Number(form.elements.temoignage.value),
	    message: form.elements.message.value,
    };
    console.log(data);
    ajaxPost(url, data, (reponse) => {
    	reponseElt.textContent = "Votre témoignage a bien été envoyé !";
    }, true);
});