import React, { useEffect, useState } from "react";
import StyledPokedexGrid from "../shared/styledPokedexGrid";
import { PokemonCard } from "../molecules/PokemonCard";

export const PokemonGrid = () => {
  const [pokemon, setPokemon] = useState({});
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const pokemonArray = [];

  async function getAllData() {
    const [respPokemonList] = await Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon?limit=5"),
    ]);

    const [pokemonListData] = await Promise.all([respPokemonList.json()]);

    setResult(
      pokemonListData.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((allpokemon) => pokemonArray.push(allpokemon));
        setPokemon(pokemonArray);
      })
    );
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <StyledPokedexGrid>
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
