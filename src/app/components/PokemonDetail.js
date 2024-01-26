// src/app/components/PokemonDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonDetail({ pokemonId }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h2>About</h2>
      <p>Type: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
      <p>Height: {pokemonData.height} dm</p>
      <p>Weight: {pokemonData.weight} hg</p>
      <h2>Abilities</h2>
      <ul>
        {pokemonData.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Stats</h2>
      <ul>
        {pokemonData.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetail;