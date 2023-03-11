# Build your own Pokedex

In this midcourse project, you'll need to build a Pokedex like the one shown in the image below. Your task is to help Ash Ketchum from Paleta Town to develop the rest of the application so he can track the count of how many Pokemon he has captured so far.

![Pokedex Image](./media/pokedex.gif)

## Getting Started

### Prerequisites

- Web browser
- Text editor

### Installing

1. Clone the repo

   ```sh
   git clone https://github.com/armanpartovi/Midcourse-project---Build-your-own-Pokedex.git

   ```

2. Open the `index.html` file in your web browser to view the Pokedex.
   Usage
   HTML
   Write the HTML once, thinking about how your content will be distributed for each one of the cards. Don´t worry about the images, follow this link to get all the pokemon thumbnails you might need.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Build your own Pokedex</title>
  </head>
  <body class="color-change-5x">
    <header>
      <img id="pokemon-logo" src="media/pokemon_logo.png" alt="pokemon_logo" />
      <img id="pokeball" src="media/pokeball.PNG" alt="pokeball" />
      <h2>Click on each image to know more about each Pokemon</h2>
    </header>
    <div id="mainContainer-id">
      <!-- Pokemon cards go here -->
    </div>
    <script src="main.js"></script>
  </body>
</html>

CSS
Assign the classes you might consider to the HTML elements. To make sure you're all good, take into account that inside your `styles.css` there should only be classes `.class` and IDs `#id`. Write your CSS and try to achieve the look and feel of the example. Don't worry though if you don't get the exact appearance. The important thing here is that your code is readable and uses the necessary CSS properties.

.p-classname,
.h3Element-classname,
.h4First-classname,
.h4Second-classname {
text-align: center;
font-size: 12px;
}

#pokemon-logo {
width: 700px;
margin: 0 auto;
display: block;
padding: 0;
}

#pokeball {
margin-top: -120px;
margin-left: 420px;
width: 200px;
}

#mainContainer-id {
display: flex;
}

JavaScript
Create an array of objects where you store all your Pokemons. Each Pokemon should have the following properties:

`thumbnail`: the path to the Pokemon's image,
`id`: the ID of your Pokemon (for instance, the position in the array),
`name`: the name of your Pokemon (for instance, 'Bulbasaur'),
`type`: an array of strings with each one of the types of each Pokemon. (For instance, Bulbasaur is type Plant and Poison)

{
thumbnail: "media/bulbasaur.png",
id: 1,
name: "Bulbasaur",
type: ["Plant", "Poison"],
}

Bonus points
Try to make that hover effect when the cursor is pointing each one of the cards. Remember that the pseudo selector needed for this is :hover.
If you feel creative, try to reproduce the same animation you see on the Gif from above. Even though there are multiple ways of doing this, a good option is to use the CSS selector @keyframes.
Getting Started
To get a local copy up and running follow these simple steps.

Prerequisites
Web Browser
Installation

1. Clone the repo

git clone https://github.com/your_username_/Midcourse-project---Build-your-own-Pokedex.git

2. Open index.html with your preferred web browser

Usage
Click on each Pokemon card to display more information about that Pokemon
Hover over each Pokemon card to see the hover effect (bonus point)
Interact with the "Total caught" button to keep track of how many Pokemons you have caught

Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

1. Create your Feature Branch (git checkout -b feature/AmazingFeature)
2. Commit your Changes (git commit -m 'Add some AmazingFeature')
3. Push to the Branch (git push origin feature/AmazingFeature)
4. Open a Pull Request

Contact
Arman Partovi - @armanpartovi
Project Link: https://github.com/armanpartovi/Midcourse-project---Build-your-own-Pokedex
