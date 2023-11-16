var nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
//i= Nb d'étages

//nombre d'espace à chaque étage : nb étage -i (5-1 = 4 au 1er étage, 5-2 = 3 au 2eme étage etc...)
//nb de # à chaque étage : = au numéro de l'étage (# au 1er étage, ## au 2eme étage etc...)

//j= nb d'espace
//k= nb de #
for (var i = 1; i <= nombreEtages; i++) { // pour chaque étage il faut généré une ligne avec des " " et des #
  var ligne = " "; // générartiion du nombre de " "
    for (var j = 1; j <= nombreEtages - i; j++) {
      ligne += " "; 
    }
    for (var k=1; k<=i; k++){ // générantion du nombre de #
      ligne += "#"
    }
    console.log(ligne);
  }
