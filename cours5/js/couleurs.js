const divElts = document.querySelectorAll("div");
var color = "white";

function keypress(event) {
	switch ((String.fromCharCode(event.charCode)).toUpperCase()) {
		case "R":
			color = "red";
			break;
		case "G":
			color = "green";
			break;
		case "Y":
			color = "yellow";
			break;
		case "B":
			color = "blue";
			break;
		case "W":
			color = "white";
			break;
	}

	for (var i = 0; i < divElts.length; i++) {
		divElts[i].style.backgroundColor = color;
	}
}

document.addEventListener("keypress", keypress);