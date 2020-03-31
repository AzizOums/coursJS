const form = document.querySelector("form");

form.addEventListener("submit", function verify(e) {
	const mdp = form.elements.mdp1.value;
	const mdp2 = form.elements.mdp2.value;

	const mdpRegExpr = /[0-9]/;
	var text = "Mot de passe OK";
	var color = "green";

	if (mdp != mdp2) {
		text = "Erreur: les deux mots de passe ne sont pas identiques";
		color = "red";
	} else if (mdp.length < 6){
		text = "Erreur: la longueur du mot de passe doit être d'au moins 6 caractères";
		color = "red";
	} else if (! mdpRegExpr.test(mdp)) {
		text = "Erreur: le mot de passe doit contenir au moins un chiffre";
		color = "red";
	}

	document.getElementById('infoMdp').textContent = text;
	document.getElementById('infoMdp').style.color = color;
	e.preventDefault();
});