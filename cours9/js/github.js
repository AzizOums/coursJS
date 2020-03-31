const form = document.querySelector('form');

const company = document.getElementById("company");
const name = document.getElementById("name");
const img = document.getElementById("img");
const blog = document.getElementById("blog");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {

	name.textContent = "";

	img.src = "";
	img.style.height = "";
	img.style.width = "";

	blog.href = "";
	blog.textContent = "";

	company.textContent = "";

	error.textContent = "";

	const pseudo = form.elements.pseudo.value;
	const api = `https://api.github.com/users/${pseudo}`;

	ajaxGet(api, (reponse) => {
		if (reponse === null) {
			error.textContent = "Utilisateur introuvable !"
		} else {
			const user = JSON.parse(reponse);
			
			if (user.name !== null)
				name.textContent = user.name;
			
			if (user.avatar_url !== null) {
				img.src = user.avatar_url;
				img.style.height = "200px";
				img.style.width = "200px";
			}
			
			if (user.blog != null) {
				blog.href = user.blog;
				blog.textContent = user.blog;
			}

			if (user.company != null)
				company.innerHTML = user.company;
		}	
	});

	e.preventDefault();
});