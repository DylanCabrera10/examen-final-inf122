import React from 'react';
const Page = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./globals.css" />
        <title>My Pokemon App</title>
      </head>
      <body>
        <div className="container">
          {/* Primer contenedor */}
          <div className="pokemonHeader">
            <h1>My Pokemon</h1>
            <h2>Dodrio</h2>
            <h3>#085</h3>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png" alt="Dodrio Front" />
          </div>

          {/* Segundo contenedor */}
          <div className="pokemonAbout">
            <h3>About</h3>
            <hr />
            <p><strong>Type:</strong> Normal, Flying</p>
            <p><strong>Height:</strong> 18 dm</p>
            <p><strong>Weight:</strong> 852 hg</p>
            <p><strong>Abilities:</strong> Run Away, Early Bird, Tangled Feet</p>
          </div>

          {/* Tercer contenedor */}
          <div className="pokemonStats">
            <h3>Stats</h3>
            <hr />
            <p><strong>Type:</strong> Normal, Flying</p>
            <p><strong>Height:</strong> 18 dm</p>
            <p><strong>Weight:</strong> 852 hg</p>
            <p><strong>Abilities:</strong> Run Away, Early Bird, Tangled Feet</p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Page;
