//Creation de la fonction game() pour lancer le jeu

function game(){

  // Récupération grace au DOM les elements HTML
  const result = document.querySelector('.result');
  const imageResult = document.querySelector('.display-image');
  const input = document.querySelector('.js-input').value;

  //Creation des variables.
  let resultat = [];
  let imgResult = [];

  // Utilisation de la boucle pour recuperer toutes les valeurs
    for(let i = 0; i < input; i++) {
      const val = Math.floor(Math.random() * 6) + 1;
      resultat.push(val);
      imgResult.push(`<img src="/images/${val}.png" alt="${val}">`);
    };

    // Affichage des valeur à l'écran
    result.textContent = `Dice : ${resultat.join(', ')}`;
    imageResult.innerHTML = imgResult.join('');
};


