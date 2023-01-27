import Vehicule from "./vehicule.js";

export default class Moto extends Vehicule {
  display() {
    return `<p>je suis une moto ${super.display()}</p>`;
  }
}
