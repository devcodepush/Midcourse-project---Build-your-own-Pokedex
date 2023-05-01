// Define an array of Pokemon objects, each containing information about a Pokemon
const Pokemon = [
  {
    thumbnail: "media/001.png",
    id: "N°001",
    name: "BALBASAUR",
    type: ["Grass", "Poison"],
  },
  {
    thumbnail: "media/002.png",
    id: "N°002",
    name: "CHARMANDER",
    type: ["Fire"],
  },
  {
    thumbnail: "media/003.png",
    id: "N°003",
    name: "CATERPIE",
    type: ["Bug"],
  },
  {
    thumbnail: "media/004.png",
    id: "N°004",
    name: "KAKUNA",
    type: ["Bug", "Poison"],
  },
  {
    thumbnail: "media/005.png",
    id: "N°005",
    name: "RATATA",
    type: ["Normal"],
  },
  {
    thumbnail: "media/006.png",
    id: "N°006",
    name: "PIKACHU",
    type: ["Electric"],
  },
  {
    thumbnail: "media/007.png",
    id: "N°007",
    name: "VULPIX",
    type: ["Fire"],
  },
  {
    thumbnail: "media/008.png",
    id: "N°008",
    name: "JIGGLYPUFF",
    type: ["Normal", "Fairy"],
  },
  {
    thumbnail: "media/009.png",
    id: "N°009",
    name: "Diglett",
    type: ["Ground"],
  },
  {
    thumbnail: "media/010.png",
    id: "N°010",
    name: "Meowth",
    type: ["Normal"],
  },
  {
    thumbnail: "media/011.png",
    id: "N°011",
    name: "Tentacruel",
    type: ["Water", "Poison"],
  },
  {
    thumbnail: "media/012.png",
    id: "N°012",
    name: "Ponyta",
    type: ["Fire"],
  },
  {
    thumbnail: "media/013.png",
    id: "N°013",
    name: "Cloyster",
    type: ["Water", "Ice"],
  },
  {
    thumbnail: "media/014.png",
    id: "N°014",
    name: "Cubone",
    type: ["Ground"],
  },
  {
    thumbnail: "media/015.png",
    id: "N°015",
    name: "Eevee",
    type: ["Normal"],
  },
  {
    thumbnail: "media/016.png",
    id: "N°016",
    name: "Archen",
    type: ["Rock", "Flying"],
  },
];

// Create a new div element to hold the Pokemon cards and set its id to "pokemons-container"
const pokemonsContainer = document.createElement("div");
pokemonsContainer.id = "pokemons-container";
document.body.appendChild(pokemonsContainer);

// Loop through each Pokemon in the Pokemon array
for (let i = 0; i < Pokemon.length; i++) {
  const pokemon = Pokemon[i];

  /* Create a new div element to hold the information about the current Pokemon
   */
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");
  pokemonCard.innerHTML = `
      <img id="pokemon-image" src="${pokemon.thumbnail}" alt="${pokemon.name}">
      <h3 id="pokemon-id">${pokemon.id}</h3>
      <h3 id="pokemon-name">${pokemon.name}</h3>
      <button id="pokemon-button1">${pokemon.type[0]}</button>
       ${pokemon.type[1] ? `<button id="pokemon-button2">${pokemon.type[1]}</button>` : ''} 
  `

  pokemonsContainer.appendChild(pokemonCard);
}