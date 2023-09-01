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
// acá deberás crear una instancia del servicio RickAndMortyService
const t=new class{// el constructor debe inicializar una variable con la url de acceso base al API
constructor(t){this.miurl=t}// este método deberá llamar al servicio y obtener los personajes
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
async getAllCharacters(){// aqui va tu llamado al API usando fetch puedes usar promesas o asycn/await
/* return new Promise((resolve, reject) => {
      fetch(this.miurl)
      .then((respuesta) => respuesta.json())
      .then((mispersonajes) => {
        //console.log(mispersonajes.results);
        const personajes = [];
        for (var i = 0; i < mispersonajes.results.length; i++) {
          personajes.push({
            name: mispersonajes.results[i].name,
            status: mispersonajes.results[i].status,
            species: mispersonajes.results[i].species,
            firstSeen: mispersonajes.results[i].origin.name,
            location: mispersonajes.results[i].location.name,
            image: mispersonajes.results[i].image,
            student: "Agustin Beltran Casas",
            code: "0000201162",
          });
        }
        resolve(mispersonajes);
      })
      .catch(error => {
        reject(error);
      });
    }) */let t=await fetch(this.miurl),e=await t.json(),a=e.results.map(t=>({name:t.name,status:t.status,species:t.species,firstSeen:t.origin.name,location:t.location.name,image:t.image,student:"Agustin Beltran Casas",code:"0000201162"}));return a;//console.log(personajes);
//return personajes;
}}("https://rickandmortyapi.com/api/character");// por último se llama la función y se renderiza la vista
!// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto
// valor (1 punto)
function(){// llamar primero createCharacterCard(character);
// llamar segundo addCharacterListeners(character);
let e=document.getElementById("character-list");console.log(e),t.getAllCharacters().then(t=>{t.forEach(t=>{console.log(t),t.name,t.status,t.species,t.firstSeen,t.location,t.image,t.name;//addCharacterListeners(personaje);
})}).catch(t=>{console.log(t)})}();//# sourceMappingURL=index.03305ff1.js.map

//# sourceMappingURL=index.03305ff1.js.map
