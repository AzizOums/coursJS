ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
    var tableaux = JSON.parse(reponse);
    tableaux.forEach((tableau) => {
    	document.getElementById('tableaux').insertAdjacentHTML("beforeEnd", 
    		`<tr>
    			<td>${tableau.nom}</td>
    			<td>${tableau.annee}</td>
    			<td>${tableau.peintre}</td>
    		</tr>`
    	);
    });
});