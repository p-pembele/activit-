/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essaie = 1;
// la boucle se repete tant que le numero est differant de la solution et tant que le nombre d'essaie n'est pas grand que 7
while ( solution!==nb && essaie <= 6) {
  console.log("vous etes à votre "+essaie+" essaie");
  essaie++ ;

  var nb = Number(prompt("Entrez un nombre : ")); // nombre à comparer
  //compraison
  if (nb < solution) {
  console.log("le chiffre est plus grand que "+ nb);
  }
  else if (nb > solution) {
    console.log("le chiffre est plus petit que "+nb);

  }

} //fin de la boucle

if(nb === solution){
  console.log("Bravo ! La solution est " + solution);
}
else{
  console.log("Vous avez perdu!La solution est " + solution);
}
