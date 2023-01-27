import Vehicule from "./vehicule.js";

export default class Voiture extends Vehicule {
  affichage() {
    return `<p>je suis une voiture : ${super.affichage()}  </p>`;
  }
}
