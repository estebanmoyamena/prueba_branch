document.title = "Esta página dice: ";

/* Prompt */
let nombre = prompt("Ingrese su nombre y apellido");
let carrera = prompt("Ingrese su carrera");

let NotaHTML1 = prompt("Ingrese nota 1 [HTML]");
let NotaHTML2 = prompt("Ingrese nota 2 [HTML]");
let NotaHTML3 = prompt("Ingrese nota 3 [HTML]");

let NotaCSS1 = prompt("Ingrese nota 1 [CSS]");
let NotaCSS2 = prompt("Ingrese nota 2 [CSS]");
let NotaCSS3 = prompt("Ingrese nota 3 [CSS]");

let NotaJS1 = prompt("Ingrese nota 1 [JS]");
let NotaJS2 = prompt("Ingrese nota 2 [JS]");
let NotaJS3 = prompt("Ingrese nota 3 [JS]");

/* getElementById */
let nom = document.getElementById("nombre");
let profesion = document.getElementById("carrera");

let notaHTML1 = document.getElementById("notaHTML1");
let notaHTML2 = document.getElementById("notaHTML2");
let notaHTML3 = document.getElementById("notaHTML3");

let notaCSS1 = document.getElementById("notaCSS1");
let notaCSS2 = document.getElementById("notaCSS2");
let notaCSS3= document.getElementById("notaCSS3");

let notaJS1= document.getElementById("notaJS1");
let notaJS2= document.getElementById("notaJS2");
let notaJS3= document.getElementById("notaJS3");

let promedio1 = document.getElementById("promedioHTML");
let promedio2 = document.getElementById("promedioCSS");
let promedio3 = document.getElementById("promedioJS");

/* valores */

nom.innerHTML = nombre || "-";
profesion.innerHTML = carrera || "-";

notaHTML1.innerHTML = NotaHTML1 || "-";
notaHTML2.innerHTML = NotaHTML2 || "-";
notaHTML3.innerHTML = NotaHTML3 || "-";

notaCSS1.innerHTML = NotaCSS1 || "-";
notaCSS2.innerHTML = NotaCSS2 || "-";
notaCSS3.innerHTML = NotaCSS3 || "-";

notaJS1.innerHTML = NotaJS1 || "-";
notaJS2.innerHTML = NotaJS2 || "-";
notaJS3.innerHTML = NotaJS3 || "-";


/* promedio */
let promedioHTML = document.getElementById("promedioHTML");
let promHTML = (parseInt(NotaHTML1) + parseInt(NotaHTML2) + parseInt(NotaHTML3))/3;
promedioHTML.innerHTML = isNaN(promHTML) ? "-": promHTML.toFixed(2);

let promedioCSS = document.getElementById("promedioCSS")
let promCSS = (parseInt(NotaCSS1) + parseInt(NotaCSS2) + parseInt(NotaCSS3))/3;
promedioCSS.innerHTML = isNaN(promCSS) ? "-": promCSS.toFixed(2);

let promedioJS = document.getElementById("promedioJS")
let promJS = (parseInt(NotaJS1) + parseInt(NotaJS2) + parseInt(NotaJS3))/3;
promedioJS.innerHTML = isNaN(promJS) ? "-": promJS.toFixed(2);