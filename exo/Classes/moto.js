import Vehicule from "./vehicule.js";

export default class Moto extends Vehicule {
  affichage() {
    return `<p>je suis une moto ${super.affichage()}</p>`;
  }
}
