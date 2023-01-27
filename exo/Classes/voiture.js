import Vehicule from "./vehicule.js";

export default class Voiture extends Vehicule {
  display() {
    return `<p>je suis une voiture : ${super.display()}  `;
  }
  option() {
    return " climatisé </p> ";
  }
}
