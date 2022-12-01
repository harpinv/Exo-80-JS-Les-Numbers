let nom = document.getElementById('is-integer');
let ton = parseFloat(nom.innerText);
console.log(nom);
console.log(ton);

if(Number.isInteger(nom.value)) {
    nom.innerText = ton + " est un nombre entier.";
} else {
    nom.innerText = ton + " n'est pas un nombre entier.";
}

let val = document.getElementById('is-nan');

if(Number.isNaN(val.innerText)) {
    val.innerText = val.innerText + " est NaN.";
} else {
    val.innerText = val.innerText + " n'est pas un nombre.";
}

let par = document.getElementById('parse-float');

par.innerText = par.innerText.replace('52.563', Number.parseFloat(par.innerText) * 26);

let tar = document.getElementById('parse-int');
let mar = parseInt(tar.innerText) / 26;

tar.innerText = tar.innerText.replace('65', Number.parseInt(mar));

let mime = document.getElementById('to-fixed');
let pipe = parseFloat(mime.innerText);
console.log(mime);
console.log(pipe);
mime.innerText = pipe.toFixed(2);