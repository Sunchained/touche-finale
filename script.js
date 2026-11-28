const claviers = [
  {
    nom: "Aube 75",
    prix: 129,
    taille: "75 %",
    switches: "Linéaires",
    stock: 8,
    image: "images/aube-75.jpg",
    categorie: "Claviers",
  },
  {
    nom: "Brume 75",
    prix: 99,
    taille: "75 %",
    switches: "Tactiles",
    stock: 0,
    image: "images/brume-75.jpg",
    categorie: "Claviers",
  },
  {
    nom: "Cime 40",
    prix: 159,
    taille: "40 %",
    switches: "Clicky",
    stock: 14,
    image: "images/cime-40.jpg",
    categorie: "Claviers",
  },
];

const parametres = new URLSearchParams(window.location.search);
const categorieChoisie = parametres.get("categorie");
console.log(categorieChoisie);

const zoneProduits = document.querySelector(".produits");
for (const clavier of claviers) {
  if (categorieChoisie !== null && clavier.categorie !== categorieChoisie) {
    continue;
  }
  const ligneClavier = document.createElement("li");
  ligneClavier.classList.add("carte");
  const photoClavier = document.createElement("img");
  photoClavier.classList.add("carte-photo");
  photoClavier.src = clavier.image;
  photoClavier.alt = "Clavier " + clavier.nom + " vu du dessus";
  ligneClavier.append(photoClavier);
  const nomClavier = document.createElement("h3");
  nomClavier.classList.add("carte-nom");
  nomClavier.textContent = clavier.nom;
  ligneClavier.append(nomClavier);
  const detailsClavier = document.createElement("p");
  detailsClavier.classList.add("carte-details");
  detailsClavier.textContent = clavier.taille + " · " + clavier.switches;
  ligneClavier.append(detailsClavier);
  const stockClavier = document.createElement("p");
  stockClavier.classList.add("carte-stock");
  if (clavier.stock === 0) {
    stockClavier.textContent = "Rupture de stock";
    ligneClavier.classList.add("rupture");
  } else {
    stockClavier.textContent = "Disponible";
  }
  ligneClavier.append(stockClavier);
  const prixClavier = document.createElement("p");
  prixClavier.classList.add("carte-prix");
  prixClavier.textContent = clavier.prix + " €";
  ligneClavier.append(prixClavier);
  zoneProduits.append(ligneClavier);
}

const categories = ["Claviers", "Switches", "Keycaps"];
const zoneMenu = document.querySelector(".menu");
for (const categorie of categories) {
  const ligneMenu = document.createElement("li");
  const lienMenu = document.createElement("a");
  lienMenu.textContent = categorie;
  lienMenu.href = "?categorie=" + categorie;
  ligneMenu.append(lienMenu);
  zoneMenu.append(ligneMenu);
}
