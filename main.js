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
    clickMessage: "Charmander is known for the flame on its tail indicating life force; if it is healthy, the flame burns brightly.",
  },
  {
    thumbnail: "media/003.png",
    id: "N°003",
    name: "CATERPIE",
    type: ["Caterpie", "Bug"],
    clickMessage: "Caterpie is known for its voracious appetite. It will often eat leaves twice as big as its own body and after its appetite is sated it will shed its skin. It molts several times before it evolves to its next phase.",
  },
  {
    thumbnail: "media/004.png",
    id: "N°004",
    name: "KAKUNA",
    type: ["Bug", "Poison"],
    clickMessage: "Kakuna is a Bug/Poison type Pokémon introduced in Generation 1 . It is known as the Cocoon Pokémon",
  },
  {
    thumbnail: "media/005.png",
    id: "N°005",
    name: "RATATA",
    type: ["Ratata", "Normal"],
    clickMessage: "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
  },
  {
    thumbnail: "media/006.png",
    id: "N°006",
    name: "PIKACHU",
    type: ["Pikachu", "Electrical"],
    clickMessage: "Pikachu is widely considered to be the most popular and well-known Pokémon species, largely due to its appearance in the Pokémon anime television series as the companion of protagonist Ash Ketchum",
  },
  {
    thumbnail: "media/007.png",
    id: "N°007",
    name: "VULPIX",
    type: ["Vulpix", "Fire"],
    clickMessage: "Vulpix is known to feign injury to escape from opponents too powerful for it to defeat.",
  },
  {
    thumbnail: "media/008.png",
    id: "N°008",
    name: "JIGGLYPUFF",
    type: ["Normal", "Fairy"],
    clickMessage: "Jigglypuff are characterized by putting their enemies to sleep by singing a lullaby. Before beginning to sing, they mesmerize the opponent with their soft, glowing eyes and, if they inflate themselves, they can sing for longer periods of time.",
  },
];

const mainContainer = document.createElement("section");
mainContainer.id = "mainContainer-id";
document.body.appendChild(mainContainer);
  

for (let index = 0; index < arrayOfPokemons.length; index++) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "cardDiv-classname";

  const imageBtn = document.createElement("button");
  imageBtn.className = "imageBtn-classname";
  const message = arrayOfPokemons[index].clickMessage;
  imageBtn.addEventListener("click", function () {
    alert(message);
  });


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









