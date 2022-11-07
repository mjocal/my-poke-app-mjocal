import React, { useEffect, useState } from "react";
import { PokemonProvider } from "../../contexts/PokemonContext";

import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { PokemonCard } from "../molecules/PokemonCard";

export const PokemonGrid = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  async function getPokemons() {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      const pokemonArray = await Promise.all(
        data.results.map((item) =>
          fetch(item.url).then((response) => response.json())
        )
      );
      setPokemon(pokemonArray);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <StyledPokedexGrid>
      <PokemonProvider></PokemonProvider>
      {loading ? (
        <p>Loading...</p>
      ) : (
        pokemon.map((item, i) => (
          <PokemonCard
            key={i}
            image={item.sprites.front_default}
            name={item.name}
            id={item.id}
            type={item.types[0].type.name}
          />
        ))
      )}
    </StyledPokedexGrid>
  );
};
