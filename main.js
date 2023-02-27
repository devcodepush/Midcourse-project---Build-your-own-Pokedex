//Data of all Pokemons on one array
const arrayOfPokemons = [
  {
    thumbnail: "media/001.png",
    id: 0,
    name: "balbasaur",
    type: ["Plant", "Poison"],
  },
  {
    thumbnail: "media/002.png",
    id: 1,
    name: "charmander",
    type: ["Charmander", "Fire"],
  },
  {
    thumbnail: "media/003.png",
    id: 2,
    name: "caterpie",
    type: ["Caterpie", "Bug"],
  },
  {
    thumbnail: "media/004.png",
    id: 3,
    name: "kakuna",
    type: ["Bug", "Poison"],
  },
  {
    thumbnail: "media/005.png",
    id: 4,
    name: "ratata",
    type: ["Ratata", "Normal"],
  },
  {
    thumbnail: "media/006.png",
    id: 5,
    name: "pikachu",
    type: ["Pikachu", "Electrical"],
  },
  {
    thumbnail: "media/007.png",
    id: 6,
    name: "vulpix",
    type: ["Vulpix", "Fire"],
  },
  {
    thumbnail: "media/008.png",
    id: 7,
    name: "jigglypuff",
    type: ["Normal", "Fairy"],
  },
];

// Writing for the first pokemon all the elemnts by order: first div then button, img, p, h3, h4, h4

//First create an empty div element
const div = document.createElement("div");
document.body.appendChild(div);
div.id = "container1";

//instead of repeating document.getElementById("container1") I can just put it on a variable:
const containerElement = document.getElementById("container1");
//create element
let createElement = document.createElement("element");
//append element into the container
let appendEleemnt = containerElement.appendChild(element);
//which elements we need for each pokemon: img , p, h3, h4, h4
//img src is thumbnail
// p is id
// h3 is name
// h4, h4 is type

for (let index = 0; index < arrayOfPokemons.length; index++) {
  const element = arrayOfPokemons[index];
  const containerElement = document.getElementById("container1");
  let createElement = document.createElement("element");
  let appendEleemnt = containerElement.appendChild(element);
}
