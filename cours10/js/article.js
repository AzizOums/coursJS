const url = "https://oc-jswebsrv.herokuapp.com/article";
const form = document.querySelector("form");
const reponseElt = document.getElementById('reponse');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);
    
    ajaxPost(url, data, (reponse) => {
    	reponseElt.textContent = "L'article a bien été ajouté !";
    });
});