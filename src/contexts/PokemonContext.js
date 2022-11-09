import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext({
  pokemon: [],
  pokemonId: [],
  selectedTeam: [],
  getPokemons: () => Promise.resolve(),
  getPokemonData: () => Promise.resolve(),
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
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

  // async function getPokemonData(id) {
  //   try {
  //     const data = await fetch(`${pokeApi}/${pokemonId}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         return data;
  //       });
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // }

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

  // export funcion PokeApiContextProvider({ children }) {
  // // const { firebaseUser } = useFirebase();
  // const [pokemonLimit, setPokemonLimit] = useState(20);
  // const [pokemonOffset, setPokemonOffset] = useState(0);
  // const [selectedTeam, setSelectedTeam] = useState([]);
  // const [pokemon, setPokemon] = useState(
  //   ["pokemon", pokemonOffset, pokemonLimit],
  //   () => fetchPokemon(pokemonOffset, pokemonLimit)
  // );

  // const getNextPokemon = useCallback(async () => {
  //   try {
  //     const newOffSet = pokemonOffset + pokemonLimit;
  //     setPokemonOffset(newOffSet);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const getPreviousPokemon = useCallback(async () => {
  //   try {
  //     const newOffSet = pokemonOffset - pokemonLimit;
  //     if (newOffSet < 0) return;
  //     setPokemonOffset(newOffSet);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const contextValue = useMemo(
  //   () => ({ pokemon, getNextPokemon, getPreviousPokemon, selectedTeam }),
  //   [pokemon, getNextPokemon, getPreviousPokemon, selectedTeam]
  // );

  const contextValue = {
    pokemon,
    pokemonId,
    // selectedTeam,
    getPokemons,
    getPokemonData,
    // getNextPokemon,
    // getPreviousPokemon,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonApi = () => useContext(PokemonContext);
