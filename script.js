const claviers = [
  { nom: "Aube 75", prix: 129, taille: "75 %", stock: 8 },
  { nom: "Brume 65", prix: 99, taille: "65 %", stock: 0 },
  { nom: "Cime 100", prix: 159, taille: "100 %", stock: 14 },
];

const zoneProduits = document.querySelector(".produits");
for (const clavier of claviers) {
  const ligneClavier = document.createElement("li");
  const nomClavier = document.createElement("h3");
  nomClavier.textContent = clavier.nom;
  ligneClavier.append(nomClavier);
  const prixClavier = document.createElement("p");
  prixClavier.textContent = clavier.prix + " €";
  ligneClavier.append(prixClavier);
  const tailleClavier = document.createElement("p");
  tailleClavier.textContent = clavier.taille;
  ligneClavier.append(tailleClavier);
  const stockClavier = document.createElement("p");
  if (clavier.stock === 0) {
    stockClavier.textContent = "Rupture de stock";
  } else {
    stockClavier.textContent = "Disponible";
  }
  ligneClavier.append(stockClavier);
  zoneProduits.append(ligneClavier);
}
