const claviers = [
  { nom: "Aube 75", prix: 129, taille: "75 %", stock: 8 },
  { nom: "Brume 65", prix: 99, taille: "65 %", stock: 0 },
  { nom: "Cime 100", prix: 159, taille: "100 %", stock: 14 },
];

const zoneProduits = document.querySelector(".produits");
for (const clavier of claviers) {
  const ligneClavier = document.createElement("li");
  ligneClavier.classList.add("carte");
  const nomClavier = document.createElement("h3");
  nomClavier.classList.add("carte-nom");
  nomClavier.textContent = clavier.nom;
  ligneClavier.append(nomClavier);
  const prixClavier = document.createElement("p");
  prixClavier.classList.add("carte-prix");
  prixClavier.textContent = clavier.prix + " €";
  ligneClavier.append(prixClavier);
  const tailleClavier = document.createElement("p");
  tailleClavier.classList.add("carte-taille");
  tailleClavier.textContent = clavier.taille;
  ligneClavier.append(tailleClavier);
  const stockClavier = document.createElement("p");
  stockClavier.classList.add("carte-stock");
  if (clavier.stock === 0) {
    stockClavier.textContent = "Rupture de stock";
    ligneClavier.classList.add("rupture");
  } else {
    stockClavier.textContent = "Disponible";
  }
  ligneClavier.append(stockClavier);
  zoneProduits.append(ligneClavier);
}
