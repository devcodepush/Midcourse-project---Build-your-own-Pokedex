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

console.log(arrayOfPokemons);

// Writing for the first pokemon all the elemnts by order: first div then button, img, p, h3, h4, h4
const DOMobject = document.createElement("div");
document.body.appendChild(DOMobject);
DOMobject.id = "container1";

const DOMbtn = document.createElement("button");
document.getElementById("container1").appendChild(DOMbtn);
DOMbtn.id = "balbasaurbtn";

const DOMimg = document.createElement("img");
document.getElementById("balbasaurbtn").appendChild(DOMimg);
DOMimg.id = "balbasaur-image";
DOMimg.src = "media/001.png";

const DOMp = document.createElement("p");
document.getElementById("container1").appendChild(DOMp);
DOMp.id = "number";
DOMp.innerHTML = "N°001";

const DOMh3 = document.createElement("h3");
document.getElementById("container1").appendChild(DOMh3);
DOMh3.innerHTML = "Bulbasaur";

const DOMh4 = document.createElement("h4");
document.getElementById("container1").appendChild(DOMh4);
DOMh4.innerHTML = "Plant";

const DOMotherh4 = document.createElement("h4");
document.getElementById("container1").appendChild(DOMotherh4);
DOMotherh4.innerHTML = "Poison";
