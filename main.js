// Define the data for all Pokemons as an array of objects
const arrayOfPokemons = [
  {
    thumbnail: "media/001.png",
    id: "N°001",
    name: "Bulbasaur",
    type: ["Plant", "Poison"],
    clickMessage: "Bulbasaur is effective against water and rock-type Pokemon",
  },
  {
    thumbnail: "media/002.png",
    id: "N°002",
    name: "Charmander",
    type: ["Fire"],
    clickMessage: "Charmander is known for the flame on its tail indicating life force; if it is healthy, the flame burns brightly.",
  },
  {
    thumbnail: "media/003.png",
    id: "N°003",
    name: "Caterpie",
    type: ["Bug"],
    clickMessage: "Caterpie is known for its voracious appetite. It will often eat leaves twice as big as its own body and after its appetite is sated it will shed its skin. It molts several times before it evolves to its next phase.",
  },
  {
    thumbnail: "media/004.png",
    id: "N°004",
    name: "Kakuna",
    type: ["Bug", "Poison"],
    clickMessage: "Kakuna is a Bug/Poison type Pokémon introduced in Generation 1 . It is known as the Cocoon Pokémon",
  },
  {
    thumbnail: "media/005.png",
    id: "N°005",
    name: "Rattata",
    type: ["Normal"],
    clickMessage: "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
  },
  {
    thumbnail: "media/006.png",
    id: "N°006",
    name: "Pikachu",
    type: ["Electrical"],
    clickMessage: "Pikachu is widely considered to be the most popular and well-known Pokémon species, largely due to its appearance in the Pokémon anime television series as the companion of protagonist Ash Ketchum",
  },
  {
    thumbnail: "media/007.png",
    id: "N°007",
    name: "Vulpix",
    type: ["Fire"],
    clickMessage: "Vulpix is known to feign injury to escape from opponents too powerful for it to defeat.",
  },
  {
    thumbnail: "media/008.png",
    id: "N°008",
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    clickMessage: "Jigglypuff are characterized by putting their enemies to sleep by singing a lullaby. Before beginning to sing, they mesmerize the opponent with their soft, glowing eyes and, if they inflate themselves, they can sing for longer periods of time.",
  },
];

const mainContainer = document.createElement("section");
mainContainer.id = "mainContainer-id";
document.body.appendChild(mainContainer);

arrayOfPokemons.forEach(pokemon => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("cardDiv-classname");

  const imageBtn = document.createElement("button");
  imageBtn.classList.add("imageBtn-classname");
  imageBtn.addEventListener("click", () => alert(pokemon.clickMessage));

  const image = new Image();
  image.classList.add("image-classname");
  image.src = pokemon.thumbnail;

  const paragraph = document.createElement("p");
  paragraph.textContent = pokemon.id;
  paragraph.classList.add("p-classname");

  const h3Element = document.createElement("h3");
  h3Element.textContent = pokemon.name;
  h3Element.classList.add("h3Element-classname");

  const types = pokemon.type.map(type => {
    const h4 = document.createElement("h4");
    h4.textContent = type;
    h4.classList.add("h4-classname");
    return h4;
  });

  mainContainer.appendChild(cardDiv);
  cardDiv.append(imageBtn, paragraph, h3Element, ...types);
  imageBtn.appendChild(image);
});
