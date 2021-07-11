//Lien avec la page : va chercher l'élément qui a l'id results
var results = document.getElementById("results");

//Connexion avec l'Api et demande d'afficher les 60 bières
fetch(`https://api.punkapi.com/v2/beers?per_page=60`)
        .then(response => response.json()) //connexion a Json
        .then(data => {
          data.map((result) => {
              //affichage dans la page html
              const beers = '<li class="fc jc-c"><div class="texte"><h2>'+result.name+'</h2><p> '+result.tagline+' </p><p> '+result.first_brewed+'</p><button class="info ">See More</button></div><img class="bouteille" src="'+result.image_url+'" alt="image de la bière"></li>';
              results.insertAdjacentHTML("beforeend", beers);              
          });
        });

    

