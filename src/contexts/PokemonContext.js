import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext({
  pokemon: [],
  selectedTeam: [],
  loading: undefined,
  getPokemons: () => Promise.resolve(),
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
});

export function PokemonProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  async function getPokemons() {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`)
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
    // selectedTeam,
    loading,
    getPokemons,
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
