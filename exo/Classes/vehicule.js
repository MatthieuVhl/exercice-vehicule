export default class Vehicule {
  constructor(marque, modele, kilometre, annee) {
    this.marque = marque;
    this.modele = modele;
    this.kilometre = kilometre;
    this.annee = annee;
  }

  affichage() {
    return `Véhicule : ${this.marque} - ${this.modele} - ${this.kilometre} - ${this.annee} `;
  }
}
