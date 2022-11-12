import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext({
  pokemon: [],
  pokemonId: [],
  getPokemons: () => Promise.resolve(),
  getPokemonData: () => Promise.resolve(),
});

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState();

  const pokeApi = "https://pokeapi.co/api/v2/pokemon";

  async function getPokemons() {
    try {
      const data = await fetch(`${pokeApi}?limit=151`)
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

  async function getPokemonData(id) {
    if (id > 0) {
      try {
        const response = await fetch(`${pokeApi}/${id}`);
        const data = await response.json();
        console.log("data", data);
        setPokemonId(data);
        return data;
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  useEffect(() => {
    getPokemons();
    getPokemonData();
  }, []);

  const contextValue = {
    pokemon,
    pokemonId,
    getPokemons,
    getPokemonData,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonApi = () => useContext(PokemonContext);
