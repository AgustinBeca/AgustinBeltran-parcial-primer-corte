// esta clase se encargará de llamar de rick & morty para obtener todos los datos
// el servicio tiene como endpoint de accesso https://rickandmortyapi.com/api/character
// que tiene como respuesta el siguiente json

// {
//     "info": {
//       "count": 826,
//       "pages": 42,
//       "next": "https://rickandmortyapi.com/api/character/?page=2",
//       "prev": null
//     },
//     "results": [
//       {
//         "id": 1,
//         "name": "Rick Sanchez",
//         "status": "Alive",
//         "species": "Human",
//         "type": "",
//         "gender": "Male",
//         "origin": {
//           "name": "Earth",
//           "url": "https://rickandmortyapi.com/api/location/1"
//         },
//         "location": {
//           "name": "Earth",
//           "url": "https://rickandmortyapi.com/api/location/20"
//         },
//         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//         "episode": [
//           "https://rickandmortyapi.com/api/episode/1",
//           "https://rickandmortyapi.com/api/episode/2",
//           // ...
//         ],
//         "url": "https://rickandmortyapi.com/api/character/1",
//         "created": "2017-11-04T18:48:46.250Z"
//       },
//       // ...
//     ]
//   }

class RickAndMortyService {
  // el constructor debe inicializar una variable con la url de acceso base al API

  constructor(miurl) {
    this.miurl = miurl;
  }

  // este método deberá llamar al servicio y obtener los personajes
  // deberá devolver un objeto de la siguiente manera

  // {
  //     "name": "Rick Sanchez",
  //     "status": "Alive",
  //     "species": "Human",
  //     "firstSeen": "Earth",
  //     "location": "Earth",
  //     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //     "student": "aqui va el nombre del estudiante",
  //     "code": "aqui va el codigo del estudiante"
  // }

  // deberá realizar el respectivo manejo de error en caso de errores al llamar el API
  // se recomienda usar el api fetch para obtener los datos como en el siguiente ejemplo

  // ejemplo con promesas

  // fetch('miurl')
  //  .then((respuesta) => respuesta.json())
  //  .then((mispersonajes) => {
  //     //aqui dentro mi logica
  //  })

  //  ejemplo con async/await

  //  const response = await fetch('miurl');
  //  const mispersonajes = await response.json();

  // valor (1 punto)
  async getAllCharacters() {
    // aqui va tu llamado al API usando fetch puedes usar promesas o asycn/await
    
    const response = await fetch(this.miurl);

    const data = await response.json();

    const mispersonajes = data.results.map((personaje) => ({
      name: personaje.name,
      status: personaje.status,
      species: personaje.species,
      firstSeen: personaje.origin.name,
      location: personaje.location.name,
      image: personaje.image,
      student: "Agustin Beltran Casas",
      code: "0000201162",
    }));

    return mispersonajes;

    //console.log(personajes);
    //return personajes;
  }
}

export default RickAndMortyService;
