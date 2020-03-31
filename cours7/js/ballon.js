const cadre = document.getElementById("cadre");
const ballon = document.getElementById("ballon");

const xMax = parseFloat(getComputedStyle(cadre).width) - parseFloat(getComputedStyle(ballon).width);
const yMax = parseFloat(getComputedStyle(cadre).height) - parseFloat(getComputedStyle(ballon).height);

var vitesse = 5;
var direction = 1;
var yDirection = 0;


const arreterElt = document.getElementById("arreter");
arreterElt.addEventListener("click", arreter);

const demarrerElt = document.getElementById("demarrer");
demarrerElt.addEventListener("click", demarrer);

var animationId = null;
var yAnimationId = null;

function deplacerBallon() {
    var x = parseFloat(getComputedStyle(ballon).left) + vitesse*direction;
    ballon.style.left = x + "px";
    animationId = requestAnimationFrame(deplacerBallon);

    if (x > xMax || x < 0) {
        direction *= -1;
        return;
    }
}

function deplacerBallonVertical() {
    var y = parseFloat(getComputedStyle(ballon).top) + vitesse*yDirection;
    ballon.style.top = y + "px";
    yAnimationId = requestAnimationFrame(deplacerBallonVertical);

    if (y >= yMax || y <= 0) {
        yDirection *= -1;
        return;
    }
}

function demarrer() {
    animationId = requestAnimationFrame(deplacerBallon);
    yAnimationId = requestAnimationFrame(deplacerBallonVertical);
    demarrerElt.disabled = true;
    arreterElt.disabled = false;
}

function arreter() {
    cancelAnimationFrame(animationId);
    cancelAnimationFrame(yAnimationId);
    demarrerElt.disabled = false;
    arreterElt.disabled = true;
}

document.addEventListener("keydown", function (e) {
    switch(e.keyCode) {
        case 38 :
            yDirection = -1;
            direction = 0;
            break;
        case 40 :
            yDirection = 1;
            direction = 0;
            break;
        case 37 :
            yDirection = 0;
            direction = -1;
            break;
        case 39 :
            yDirection = 0;
            direction = 1;
            break;
    }
});


