const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
//Initialiser une variable pour suivre si tous les livres ont été empruntés au moins une fois
let tousEmpruntes = true;

for (let i = 0; i < books.length; i++) {  // on parcours chaque ligne du tableau
  if (books[i].rented <= 0) { // et on vérifie s'il existe un livre avec rented < à 0. si oui, il sort de la boucle
    tousEmpruntes = false;
    break;
  }
}
//on affiche le résultat
if (tousEmpruntes === true) {
  console.log("Tous les livres ont-ils été empruntés au moins une fois ? OUI");
} 
else {
  console.log("1. Tous les livres ont-ils été empruntés au moins une fois ? NON");
}


// Question 2: Quel est le livre le plus emprunté ?
books.sort((a, b) => b.rented - a.rented);
const maxRentedBook =books[0]; 
console.log("Livre le plus emprunté :", maxRentedBook);

// Question 3: Quel est le livre le MOINS emprunté ?
books.sort((a, b) => a.rented - b.rented);
const minRentedBook =books[0]; 
console.log("Livre le - emprunté :", minRentedBook);

//Q4 : Trouve le livre avec l'ID: 873495 ;
const find873495 = books.find(book =>book.id === 873495)
console.log("livre avec l'id 873495:", find873495);