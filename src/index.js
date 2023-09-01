import RickAndMortyService from "./service";

// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService(
  "https://rickandmortyapi.com/api/character"
);

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

// valor (1 punto)

function createCharacterList() {
  // llamar primero createCharacterCard(character);
  // llamar segundo addCharacterListeners(character);

  const characterList = document.getElementById("list");
  //console.log(characterList);
  service.getAllCharacters()
    .then((personajes) => {
      personajes.forEach((personaje) => {
        //console.log(personaje);
        characterList.innerHTML =
          characterList.innerHTML + createCharacterCard(personaje);    
      });
      addCharacterListeners();
    })
    .catch((error) => {
      console.log(error);
    });
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

// valor (1 punto) HTML

function createCharacterCard(character) {
  
  var color = "";
  if(character.status === "Alive"){
    color = "#54CB44"
  } else if(character.status === "unknown"){
    color = "#9E9E9E;"
  } else if(character.status === "Dead"){
    color = "#D63D2E;"
  }

  const card = `<div class="card">
                  <img src="${character.image}" alt="${character.name + "Image"}" />
                  <div class= "card-content">
                    <h2 class="name">${character.name}</h2>
                    <div class="status">
                      <p class="circle" style="background-color: ${color}"></p>
                      <p class="information">${character.status} - ${character.species}</p>
                    </div>
                    <p class="subtitle">Last known location:</p>
                    <p class="information">${character.location}</p>
                    <p class="subtitle">First Seen in:</p>
                    <p class="information">${character.firstSeen}</p>
                  </div>
                </div>`;
  return card;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click
// cuando se seleccione un personaje debe decir hola soy 'nombre personaje', recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners() {
  const cards = document.querySelectorAll(".name");

  function handleClick(event){
    const elemento = event.target;
    console.log("Hola soy", elemento.textContent);
  }

  cards.forEach(card => {
    card.addEventListener('click', handleClick);
  });
  
}

// por último se llama la función y se renderiza la vista
createCharacterList();
