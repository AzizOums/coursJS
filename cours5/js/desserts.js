const dessertsElt = document.getElementById("desserts");
const buttonElt = document.querySelector("button");

buttonElt.addEventListener("click", function click() {
	const dessert = prompt("ajouter un dessert: ");

	const childElt = document.createElement("li");
	childElt.textContent = dessert;
	childElt.addEventListener("click", modify);

	dessertsElt.appendChild(childElt);
});

function modify(event) {
	const dessert = prompt("modifier un dessert: ");
	event.target.textContent = dessert;
	event.stopPropagation();
};