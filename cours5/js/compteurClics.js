var cpt = 0;
const cptElt = document.getElementById("compteurClics");

function click(){
	cptElt.textContent = ++cpt;
}

document.getElementById('clic').addEventListener("click", click);

function disableClick(){
	document.getElementById('clic').removeEventListener("click", click);
}

document.getElementById('desactiver').addEventListener("click", disableClick);