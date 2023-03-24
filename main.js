//Data of all Pokemons on one array
const arrayOfPokemons = [
  {
    thumbnail: "media/001.png",
    id: "N°001",
    name: "BALBASAUR",
    type: ["Plant", "Poison"],
    clickMessage: "Bulbasaur is effective against water and rock-type Pokemon",
  },
  {
    thumbnail: "media/002.png",
    id: "N°002",
    name: "CHARMANDER",
    type: ["Charmander", "Fire"],
    clickMessage: "Bulbasaur is effective against water and rock-type Pokemon",
  },
  {
    thumbnail: "media/003.png",
    id: "N°003",
    name: "CATERPIE",
    type: ["Caterpie", "Bug"],
    clickMessage: "",
  },
  {
    thumbnail: "media/004.png",
    id: "N°004",
    name: "KAKUNA",
    type: ["Bug", "Poison"],
    clickMessage: "",
  },
  {
    thumbnail: "media/005.png",
    id: "N°005",
    name: "RATATA",
    type: ["Ratata", "Normal"],
    clickMessage: "",
  },
  {
    thumbnail: "media/006.png",
    id: "N°006",
    name: "PIKACHU",
    type: ["Pikachu", "Electrical"],
    clickMessage: "",
  },
  {
    thumbnail: "media/007.png",
    id: "N°007",
    name: "VULPIX",
    type: ["Vulpix", "Fire"],
    clickMessage: "",
  },
  {
    thumbnail: "media/008.png",
    id: "N°008",
    name: "JIGGLYPUFF",
    type: ["Normal", "Fairy"],
    clickMessage: "",
  },
];

//which elements we need for each pokemon: button, img , p, h3, h4, h4
//img src is thumbnail
// p is id
// h3 is name
// h4, h4 is type

const mainContainer = document.createElement("section");
mainContainer.id = "mainContainer-id";
document.body.appendChild(mainContainer);

for (let index = 0; index < arrayOfPokemons.length; index++) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "cardDiv-classname";

  const imageBtn = document.createElement("button");
  imageBtn.className = "imageBtn-classname";
  const image = document.createElement("img");
  image.className = "image-classname";
  image.src = arrayOfPokemons[index].thumbnail;

  const paragraph = document.createElement("p");
  paragraph.textContent = arrayOfPokemons[index].id;
  paragraph.className = "p-classname";

  const h3Element = document.createElement("h3");
  h3Element.textContent = arrayOfPokemons[index].name;
  h3Element.className = "h3Element-classname";

  const h4FirstElement = document.createElement("h4");
  h4FirstElement.textContent = arrayOfPokemons[index].type[0];
  h4FirstElement.className = "h4First-classname";

  const h4SecondElement = document.createElement("h4");
  h4SecondElement.textContent = arrayOfPokemons[index].type[1];
  h4SecondElement.className = "h4Second-classname";

  mainContainer.appendChild(cardDiv);
  cardDiv.append(
    imageBtn,
    paragraph,
    h3Element,
    h4FirstElement,
    h4SecondElement
  );
  imageBtn.appendChild(image);
}

for (let index = 0; index < arrayOfPokemons.length; index++) {
  const alertBtn = document.getElementsByClassName("imageBtn");
  const alertMessage = arrayOfPokemons[index].clickMessage;
  function alertFunction() {
    alert(alertMessage);
  }
  alertBtn.addEventListener("click", alertMessage);
}