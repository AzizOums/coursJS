
const pElts = document.querySelectorAll("div");

modify(pElts, "color");
modify(pElts, "background");

function modify(elts, what) {
	var color;
	switch (what) {
		case "color":
			color = prompt("saisir la couleur du text: ");
			for (var i = 0; i < elts.length; i++)
				elts[i].style.color = color;
			break;
		case "background":
			color = prompt("saisir la couleur du background: ");
			for (var i = 0; i < elts.length; i++)
				elts[i].style.backgroundColor = color;
			break;
	}
}