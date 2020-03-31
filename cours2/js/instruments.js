
infosLiens();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur


function infosLiens(){
	elems = document.querySelectorAll("a");
	liens = [];

	for (var i = 0; i < elems.length; i++) {
		if (elems[i].hasAttribute("href")) {
			liens.push(elems[i].getAttribute("href"));
		}
	}

	console.log(liens.length);
	
	if (liens.length > 0) {
		console.log(liens[0]);
		console.log(liens[liens.length - 1]);
	}
}


function possede(id, classe) {
	const elem = document.getElementById(id);
	if (elem != null) {
		const classes = elem.classList;
		console.log(classes.contains(classe));
	} else {
		console.error("aucun element ne possède l'identifiant:", id);
	}
}