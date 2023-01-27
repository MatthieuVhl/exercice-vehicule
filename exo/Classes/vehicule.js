export default class Vehicule {
  constructor(marque, modele, kilometre, annee, option) {
    this.marque = marque;
    this.modele = modele;
    this.kilometre = kilometre;
    this.annee = annee;
    this.option = option;
  }

  display() {
    return `Véhicule : ${this.marque} - ${this.modele} - ${this.kilometre} - ${this.annee} - ${this.option}  `;
  }
}
