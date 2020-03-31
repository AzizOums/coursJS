const lettresElt = document.getElementById('lettres');
const motsElt = document.getElementById('mots');

for ( var i = 0; i < lettresElt.children.length; i++ ) {
	lettresElt.children[i].addEventListener("click", (e) => {
		const api = `https://oc-jswebsrv.herokuapp.com/api/lexique/${e.target.textContent}`;
		
		ajaxGet(api, (reponse) => {
			motsElt.textContent = "";
			const mots = JSON.parse(reponse);

			if (mots.length > 0) {
				mots.forEach( (mot) => 
					motsElt.insertAdjacentHTML("beforeEnd", 
						`<h3>${mot.term}</h3>
						<p>${mot.definition}</p>`)
				);
			} else {
				motsElt.insertAdjacentHTML("beforeEnd", `<p>aucun mot pour la lettre ${e.target.textContent}</p>`);
			}
		});
	});
};

