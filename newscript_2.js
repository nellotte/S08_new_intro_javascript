// Un prompt s'affiche avec la question suivante
//"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"

var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

var resultat = 1; //valeur de départ

for (var i=1 ; i<= nombre; i ++) {
resultat = resultat*i ;
}

  // Affiche le résultat dans la console
  console.log("Le résultat est : " + resultat);