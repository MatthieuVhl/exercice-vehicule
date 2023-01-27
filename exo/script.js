import Voiture from "./Classes/voiture.js";
import Moto from "./Classes/moto.js";

let Renault = new Voiture(
  "Renault",
  "Kangoo",
  "240 000km",
  "2003",
  "climatisé"
);
let BMW = new Moto("BMW", "R1150R Rockster", "65 00km", "2005", "");

console.log(Renault.display());
console.log(BMW.display());

let Vehicules = document.querySelector("#Vehicules");

Vehicules.innerHTML += Renault.display();
Vehicules.innerHTML += BMW.display();
