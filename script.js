const claviers = [
  { nom: "Aube 75", prix: 129, taille: "75 %", stock: 8 },
  { nom: "Brume 65", prix: 99, taille: "65 %", stock: 0 },
  { nom: "Cime 100", prix: 159, taille: "100 %", stock: 14 },
];

const zoneProduits = document.querySelector(".produits");
for (const clavier of claviers) {
  const ligneClavier = document.createElement("li");
  ligneClavier.textContent = clavier.nom;
  zoneProduits.append(ligneClavier);
}
