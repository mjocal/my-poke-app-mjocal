import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const PokemonContext = createContext({
  pokemon: [],
  selectedTeam: [],
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
});

export function PokemonProvider({ children }) {
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

  const contextValue = "";

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonApi = () => useContext(PokemonContext);
