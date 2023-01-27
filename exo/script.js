import Voiture from "./Classes/voiture.js";
import Moto from "./Classes/moto.js";

let Renault = new Voiture("Renault", "Kangoo", "240 000km", "2003");
let BMW = new Moto("BMW", "R1150R Rockster", "65.00km", "2005");

console.log(Renault.affichage());
console.log(BMW.affichage());

let Vehicules = document.querySelector("#Vehicules");

Vehicules.innerHTML += Renault.affichage();
Vehicules.innerHTML += BMW.affichage();
